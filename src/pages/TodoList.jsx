import Layout from '../components/layout/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import List from '../components/List';
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const saveTodoData = (e) => {
    const todo = {
      ...e,
      id: Math.random().toString(),
    };
    // console.log(todo);
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    const deleteItem = [...todos].filter((item) => item.id !== id);
    setTodos(deleteItem);
  };

  return (
    <Layout>
      <Header />
      <Form saveTodoData={saveTodoData} />
      <List todoList={todos} handleDelete={handleDelete} />
    </Layout>
  );
};

export default TodoList;
