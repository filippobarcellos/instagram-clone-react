import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instagram-clone-prisma-api.herokuapp.com/api/',
});

export default api;
