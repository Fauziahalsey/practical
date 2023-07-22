import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoTable todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
