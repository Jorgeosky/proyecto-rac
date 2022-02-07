import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRentedCarByUser } from '../../hooks/useRentedCarByUser';
import UserContext from '../Context';
import { VehicleCard } from '../searchVehicle/VehicleCard';

export const RentedCar = () => {
  const {
    state: {
      user: { _id: id },
    },
  } = useContext(UserContext);
  const {
    rentedCar: { data: rentedData /* error */ },
  } = useRentedCarByUser(id);

  // const [carData, setCarData] = useState([]);

  return (
    <div>
      {rentedData && rentedData.map((data) => <VehicleCard key={uuidv4()} {...data.cars} />)}
    </div>
  );
};
