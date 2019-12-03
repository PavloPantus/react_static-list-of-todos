/* eslint-disable react/prop-types */
import React from 'react';

const User = ({ user }) => (
  <td>{user.name}</td>
);

User.defaultProps = { name: 'name not found' };

export default User;
