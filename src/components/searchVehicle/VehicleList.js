import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { carData } from '../../data/searchVehicle';
import { VehicleCard } from './VehicleCard';

export function VehicleList() {
  return (
    <Container className="mt-5 pe-3" fluid>
      <Row className="g-4" sm={2}>
        {carData.map((car) => (
          <VehicleCard key={uuidv4()} {...car} />
        ))}
      </Row>
    </Container>
  );
}
