import axios from './axios';

export async function getCSRFToken() {
  await axios.get('/sanctum/csrf-cookie', { baseURL: 'http://localhost:8000' });
}