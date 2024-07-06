import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, status) => axios.put(`${API_URL}/tasks/${id}`, { status });
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
