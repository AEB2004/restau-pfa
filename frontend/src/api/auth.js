import axios from './axios';

// Fonction pour login
export async function login(email, password) {
  const response = await axios.post('/login', { email, password });
  return response.data;
}

// Fonction pour register
export async function register(name, email, password) {
  const response = await axios.post('/register', { name, email, password });
  return response.data;
}