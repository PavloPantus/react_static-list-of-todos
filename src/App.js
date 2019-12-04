import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

const getTodosWithUsers = (mytodos, myusers) => (
  mytodos.map(todo => (
    {
      ...todo,
      user: myusers.find(user => user.id === todo.userId),
    }
  ))
);

export default App;
