import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, userToEdit }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  useEffect(() => {
    if (userToEdit) setUser(userToEdit);
  }, [userToEdit]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ name: '', email: '', phone: '', city: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{userToEdit ? 'Edit User' : 'Add User'}</h3>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" type="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="city" value={user.city} onChange={handleChange} placeholder="City" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;