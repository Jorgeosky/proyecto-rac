import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRentedCarByUser } from '../../hooks/useRentedCarByUser';
import UserContext from '../Context';
import { VehicleRented } from './VehicleRented';

export const RentedCar = ({ setState }) => {
  const {
    state: {
      user: { _id: id },
    },
  } = useContext(UserContext);
  const {
    rentedCar: { data: rentedData /* error */ },
  } = useRentedCarByUser(id);

  // const [carData, setCarData] = useState([]);
  console.log(rentedData);
  return (
    <div className="d-flex" style={{ flexDirection: 'column' }}>
      {rentedData &&
        rentedData.map((data) => (
          <VehicleRented
            key={uuidv4()}
            {...data.cars}
            endTrip={data.endTrip}
            startTrip={data.startTrip}
          />
        ))}
      <button
        className="btn btn-primary btn-large"
        onClick={() => setState('profile')}
        style={{ textAlign: 'center' }}
        type="button">
        Return to Profile
      </button>
    </div>
  );
};
