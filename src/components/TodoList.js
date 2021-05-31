import { useSelector } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const TodoList = () => {
  const classes = useStyles()
  const todos = useSelector((state) => state);
  const [isCompleted, SetIsCompleted] = useState(false);
  const [showAll, setShowAll] = useState(true);
  console.log(todos);
  return (
    <div>
      {showAll
        ? todos.map((t) => <TodoItem t={t} />)
        : todos
            .filter((todo) => todo.completed === isCompleted)
            .map((t) => <TodoItem t={t} />)}
      {/* <button
        onClick={() => {
          setShowAll(true);
        }}
      >
        all task
      </button>
      <button
        onClick={() => {
          SetIsCompleted(true);
          setShowAll(false);
        }}
      >
        completed
      </button>
      <button onClick={() => {SetIsCompleted(false)
      setShowAll(false)
      }}>incomplete</button> */}
      <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => {
          setShowAll(true);
        }}>All task</Button>
        <Button onClick={() => {
          SetIsCompleted(true);
          setShowAll(false);
        }}>completed</Button>
        <Button onClick={() => {SetIsCompleted(false)
      setShowAll(false)}} >incomplete</Button>
      </ButtonGroup>

      </div>
      
    </div>
  );
};

export default TodoList;
