import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Backend URL

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};
