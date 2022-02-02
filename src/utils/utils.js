export const FilterCarsByPrice = (data, price) => data.filter((cars) => cars.price >= price);
export const FilterCarsByType = (data, type) =>
  data.filter((cars) => cars.type.toLowerCase() === type);

export const FilterCarsByMake = (data, make) =>
  data.filter((cars) => {
    if (make.includes('_')) {
      make = make.replace('_', ' ');
    }
    return cars.makes.toLowerCase() === make;
  });

export const FilterCarsBySeats = (data, seats) => data.filter((cars) => cars.seats >= seats);
