import axios from 'axios';
import JwtService from './jwt.service';

// create axios instance
export const instance = axios.create({
  baseURL: 'http://localhost:8080/v1/',
});

instance.interceptors.request.use(
  (config) => {
    const token = JwtService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
