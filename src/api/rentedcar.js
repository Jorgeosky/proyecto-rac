import http from './http';

export const getAllRentedCars = () => http.get('/rentcar').then((response) => response.data);

export const createRentedCar = (body) =>
  http.post('/rentcar', body).then((response) => response.data);

export const getRentedByUser = (id) =>
  http.get(`/user/${id}/rentcar`).then((response) => response.data);
