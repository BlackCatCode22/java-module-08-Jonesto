import React from 'react';

const UserList = ({ users, onEdit, onDelete, onLocation }) => {
  return (
    <div>
      <h3>User List</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>City</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.content?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.city}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
                <button onClick={() => onLocation(user.id)}>Location</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;