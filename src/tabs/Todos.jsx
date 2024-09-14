import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = JSON.parse(localStorage.getItem('todos'));

    return data || [];
  });

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== id;
      });
    });
  };

  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </>
  );
};
