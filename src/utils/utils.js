export const FilterCarsByPrice = (data, min, max) =>
  data.filter((car) => car.price >= min && car.price <= max);

export const FilterCarsByType = (data, type) =>
  data.filter((car) => car.type.toLowerCase() === type);

export const FilterCarsByMake = (data, make) => data.filter((car) => car.make === make);
/* data.filter((car) => {
    if (make.includes('_')) {
      make = make.replace('_', ' ');
    }
    return car.make.toLowerCase() === make;
  }); */

export const FilterCarsBySeats = (data, seats) => data.filter((car) => car.seats >= seats);

export const FilterIsRented = (data) => data.filter((car) => !car.isRented);
