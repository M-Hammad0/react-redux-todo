import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, updateTodo } from "../Redux/Action";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  item: {
    fontSize: "1rem",
    marginLeft: '10px'
  },
  // item2: {
  //   textDecoration: "none",
  // },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0",
  },
}));

const TodoItem = ({ t }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  // const [completed, SetCompleted] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {edit ? (
        <div className={classes.itemContainer}>
          <Typography
            style={{textDecoration: t.completed ? 'line-through' : 'none'}}
            className={classes.item}
            onDoubleClick={() => {
              setEdit(false);
            }}
          >
            {t.title}
          </Typography>
          <div>
            <CreateIcon
              onClick={() => {
                dispatch(updateTodo(t.id));
                // SetCompleted(true);
              }}
            />
            <DeleteIcon onClick={() => dispatch(deleteTodo(t.id))} />
          </div>
        </div>
      ) : (
        <input
          placeholder={t.title}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setEdit(true);
              dispatch(editTodo(t.id, name));
              // SetCompleted(false)
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          type="text"
          id={t.id}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      )}
    </div>
  );
};

export default TodoItem;
