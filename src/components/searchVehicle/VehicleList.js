import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { carData } from '../../data/searchVehicle';
import { VehicleCard } from './VehicleCard';

export function VehicleList() {
  return (
    <Container className="mt-5 pe-3" fluid>
      <Row className="g-4" sm={2}>
        {carData.map((car) => (
          <VehicleCard key={car} {...car} />
        ))}
      </Row>
    </Container>
  );
}
