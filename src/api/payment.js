import http from './http';

export const payment = (body) => http.post('/payments', body).then((response) => response.data);
