import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://true-fitness.onrender.com/api', // ← Update to your deployed backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically add token to requests...
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;