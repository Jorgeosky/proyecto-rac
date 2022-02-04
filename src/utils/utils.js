export const FilterCarsByPrice = (data, min, max) =>
  data.filter((car) => car.price >= min && car.price <= max);

export const FilterCarsByType = (data, type) =>
  data.filter((car) => car.type.toLowerCase() === type);

export const FilterCarsByMake = (data, make) =>
  data.filter((cars) => {
    if (make.includes('_')) {
      make = make.replace('_', ' ');
    }
    return cars.make.toLowerCase() === make;
  });

export const FilterCarsBySeats = (data, seats) => data.filter((cars) => cars.seats >= seats);
