import useSWR from 'swr';
import { getAllRentedCars } from '../api/rentedcar';

export const useRentedCarByUser = (id) => {
  const { data, error } = useSWR(`/users/${id}/rentcar`, async () => {
    const response = await getAllRentedCars();
    return response.data;
  });

  return {
    rentedCar: { data, error },
  };
};
