import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { NavbarSearch } from '../components/searchVehicle/NavbarSearch';
import { SearchButtons } from '../components/searchVehicle/SearchButtons';
import { VehicleList } from '../components/searchVehicle/VehicleList';
import { useCars } from '../hooks/useCars';
// import { carData } from '../data/searchVehicle';
import {
  FilterCarsByMake,
  FilterCarsByPrice,
  FilterCarsBySeats,
  FilterCarsByType,
  FilterIsRented,
} from '../utils/utils';

export default function SearchPage() {
  const location = useLocation();
  const {
    price_min: priceMin,
    price_max: priceMax,
    type,
    make,
    seats,
  } = queryString.parse(location.search);
  console.log(type, make, seats);

  const {
    cars: { data = [] },
  } = useCars();
  console.log(data);
  let carArray = data;
  carArray = FilterIsRented(carArray);
  if (priceMin && priceMax) carArray = FilterCarsByPrice(carArray, priceMin, priceMax);
  if (type) carArray = FilterCarsByType(carArray, type);
  if (make) carArray = FilterCarsByMake(carArray, make);
  if (seats) carArray = FilterCarsBySeats(carArray, seats);

  return (
    <>
      <header className="header">
        <NavbarSearch />
        <div className="header__filter d-flex">
          <SearchButtons />
        </div>
      </header>
      <main>
        <Container className="mb-5" fluid>
          <Row>
            <Col>
              <VehicleList carData={carArray} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
