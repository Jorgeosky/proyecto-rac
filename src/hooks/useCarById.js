import useSWR from 'swr';

import { getCarByID } from '../api/car';

export const useCarById = (id) => {
  const { data, error } = useSWR(`/cars/${id}`, async () => {
    const response = await getCarByID(id);
    return response.data;
  });

  return {
    car: { data, error },
  };
};
