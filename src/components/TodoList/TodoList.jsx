import { Grid } from '..';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(({ text, id }, i) => (
        <TodoListItem key={id} text={text} counter={i + 1} />
      ))}
    </Grid>
  );
};
