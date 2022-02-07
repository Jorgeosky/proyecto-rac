import useSWR from 'swr';
import { createCar, getAllCars } from '../api/car';

export const useCars = () => {
  const { data, error, mutate } = useSWR('/cars', async () => {
    const response = await getAllCars();
    return response.data;
  });

  async function create(payload) {
    const response = await createCar(payload);
    mutate([response.data, ...data], true);
  }
  return {
    cars: { data, error },
    actions: {
      create,
    },
  };
};
