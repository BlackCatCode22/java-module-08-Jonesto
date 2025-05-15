import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser, getUserLocation } from './services/userService';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserLocation from './components/UserLocation';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const fetchUsers = () => {
    getUsers().then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = (user) => {
    if (user.id) {
      updateUser(user.id, user).then(fetchUsers);
    } else {
      createUser(user).then(fetchUsers);
    }
    setEditingUser(null);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setLocationData(null);
  };

  const handleDelete = (id) => {
    deleteUser(id).then(fetchUsers);
  };

  const handleLocation = (id) => {
    getUserLocation(id).then(res => setLocationData(res.data));
  };

  return (
    <div className="App">
      <h2>User Management App</h2>
      <UserForm onSave={handleSave} userToEdit={editingUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} onLocation={handleLocation} />
      <UserLocation locationData={locationData} />
    </div>
  );
}

export default App;