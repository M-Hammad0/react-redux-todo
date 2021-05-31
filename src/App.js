import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 375,
    margin: 'auto',
    marginTop: '100px',
    backgroundColor: '#FFFFFF'
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px'
  }
});


function App() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.heading}>TodoList</Typography>
      <AddTodo />
      <TodoList />
      </CardContent>
    </Card>

  );
}

export default App;
