import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getUsers = (page = 0, size = 10, sortBy = 'id') =>
  axios.get(`${API_URL}?page=${page}&size=${size}&sortBy=${sortBy}`);

export const getUser = (id) => axios.get(`${API_URL}/${id}`);

export const createUser = (user) => axios.post(API_URL, user);

export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);

export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);

export const getUserLocation = (id) =>
  axios.get(`${API_URL}/${id}/location`);