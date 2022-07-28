import Layout from '../components/layout/Layout';
import Form from '../components/Form';
import List from '../components/List';
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const saveTodoData = (data) => {
    const todo = {
      ...data,
      id: Math.random().toString(),
    };
    // console.log(todo);
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    const deleteItem = [...todos].filter((item) => item.id !== id);
    setTodos(deleteItem);
  };

  const handleToggle = (id) => {
    // console.log('TodoList에서 출력', id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Layout>
      <Form saveTodoData={saveTodoData} />
      <List
        todoList={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </Layout>
  );
};

export default TodoList;
