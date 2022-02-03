import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { NavbarSearch } from '../components/searchVehicle/NavbarSearch';
import { SearchButtons } from '../components/searchVehicle/SearchButtons';
import { VehicleList } from '../components/searchVehicle/VehicleList';
import { carData } from '../data/searchVehicle';
import {
  FilterCarsByMake,
  FilterCarsByPrice,
  FilterCarsBySeats,
  FilterCarsByType,
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
  const { price, vehicletype, vehiclemake, numberseats } = queryString.parse(location.search);
  let carArray = carData;

  if (price) carArray = FilterCarsByPrice(carArray, price);
  if (vehicletype) carArray = FilterCarsByType(carArray, vehicletype);
  if (vehiclemake) carArray = FilterCarsByMake(carArray, vehiclemake);
  if (numberseats) carArray = FilterCarsBySeats(carArray, numberseats);
  /* if (vehiclemake) carArray = FilterCarsByPrice(carArray, price);
  if (numberseats) carArray = FilterCarsByPrice(carArray, price); */

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
