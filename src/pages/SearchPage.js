import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
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

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: '0',
};

const center = {
  lat: -8.1022,
  lng: -79.0493,
};

export default function SearchPage() {
  const location = useLocation();
  const {
    price_min: priceMin,
    price_max: priceMax,
    type,
    make,
    seats,
  } = queryString.parse(location.search);

  const {
    cars: { data = [] },
  } = useCars();

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
            <Col md={8}>
              <VehicleList carData={carArray} />
            </Col>
            <Col md={4}>
              <div className="main__searchResultsMap">
                <div className="main__searchResultsMap-container">
                  <LoadScript googleMapsApiKey="AIzaSyAl7cTqz14ZfDsX376FmiAKxngvBk3CQ7A">
                    <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={16}>
                      {/* Child components, such as markers, info windows, etc. */}
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
