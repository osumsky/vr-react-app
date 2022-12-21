import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createUser = (data) => httpClient.post('/users', data);
export const getAllUsers = ({ limit = 5, offset = 0 }) =>
  httpClient.get('/users', { params: { limit, offset } });
