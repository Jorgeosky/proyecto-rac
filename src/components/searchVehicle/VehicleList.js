import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { VehicleCard } from './VehicleCard';

export function VehicleList({ carData }) {
  return (
    <Container className="mt-5 " fluid>
      <Row className="g-5" md={2} xl={3}>
        {carData.map((car) => (
          <VehicleCard key={uuidv4()} {...car} />
        ))}
      </Row>
    </Container>
  );
}
