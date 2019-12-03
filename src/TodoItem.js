/* eslint-disable react/prop-types */
import React from 'react';
import User from './User';

const Todoitem = (props) => {
  const { id, title, completed, user } = props.todo;

  return (
    <tr className="App-table-row">
      <td>{id}</td>
      <td>{title}</td>
      <td className={completed ? 'completed' : 'not-completed'}>
        {completed ? 'completed' : 'not completed'}
      </td>
      <User user={user} />
    </tr>
  );
};

Todoitem.defaultProps = {
  id: 'id not found',
  title: 'title not found',
  completed: 'completed status undefined',
};

export default Todoitem;
