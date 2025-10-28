import axios from 'axios';
import { handleBadToken } from '../utils/auth';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // to handle error in catch
    return Promise.reject(error);
  }
);

// handle Token
axiosInstance.interceptors.response.use(
  (response) => response, // if success → continue normally
  (error) => {
    // check if the error is a 401 (unauthorized)
    if (error.response && error.response.status === 401) {
      handleBadToken(); // handle globally
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
