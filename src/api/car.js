import http from './http';

export const getAllCars = () => http.get('/cars').then((response) => response.data);

export const getCarByID = (id) => http.get(`/cars/${id}`).then((response) => response.data);

export const createCar = (body) => http.post('/cars', body).then((response) => response.data);
