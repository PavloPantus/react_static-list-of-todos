import React from 'react';
import Todoitem from './TodoItem';

const TodoList = todos => (
  <table className="App-table">
    <thead className="App-table-head">
      <tr>
        <td>todo id</td>
        <td>title</td>
        <td>completed</td>
        <td>user</td>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <Todoitem todo={todo} key={todo.id} />
      ))}
    </tbody>
  </table>
);

export default TodoList;