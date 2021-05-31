import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Action";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    height: "40px",
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch(addTodo({ title: title }));
              setTitle("");
              e.preventDefault();
            }
          }}
        />
      </form>
      <Button
        className={classes.btn}
        onClick={() => {
          dispatch(addTodo({ title: title }));
          setTitle("");
        }}
        variant="contained"
        color="primary"
      >
        New task
      </Button>
    </div>
  );
};

export default AddTodo;
