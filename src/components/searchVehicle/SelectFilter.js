import React from 'react';
import { Form } from 'react-bootstrap';
import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';

export function SelectFilter() {
  return (
    <>
      <Form.Group className="mb-4" controlId="formGridRating">
        <Form.Label>Vehicle Type</Form.Label>
        <Form.Select aria-label="Default select example">
          {vehicleType.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridRating">
        <Form.Label>Vehicle Makes</Form.Label>
        <Form.Select aria-label="Default select example">
          {vehicleMakes.map((makes) => (
            <option key={makes.value} value={makes.value}>
              {makes.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGridRating">
        <Form.Label>Number of Seats</Form.Label>
        <Form.Select aria-label="Default select example">
          {numberSeats.map((seats) => (
            <option key={seats.value} value={seats.value}>
              {seats.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}
