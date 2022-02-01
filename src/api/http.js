import axios from 'axios';
import { BASE_URL } from './consts';
import { clearSession, getSession } from './session';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log(error);

    if (error.response.status === 401) {
      clearSession();
      document.location = `${BASE_URL}/signin`; // aqui no usamos navigate, porque no estamos en la capa de React, estamos en la capa de red
    }
    return Promise.reject(error);
  },
);

export default instance;
