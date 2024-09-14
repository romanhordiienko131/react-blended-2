import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = text => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: nanoid(),
          text,
        },
      ];
    });
  };

  console.log(todos);

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </>
  );
};
