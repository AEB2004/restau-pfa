import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Sans /api ici
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// Intercepteur pour gérer les erreurs CSRF
instance.interceptors.request.use(
  config => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];
    
    if (token) {
      config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
    }
    
    return config;
  },
  error => Promise.reject(error)
);

export default instance;