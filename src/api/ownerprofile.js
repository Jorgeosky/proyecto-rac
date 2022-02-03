import http from './http';

export const getOwnerProfile = () => http.get('/owners/profile').then((response) => response.data);

export const updateOwnerProfile = (body) =>
  http.put('/owners/profile', body).then((response) => response.data);

export const updateOwnerPhoto = (body) =>
  http.put('/owners/profile/photo', body).then((response) => response.data);
