import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Col, Form, Row } from 'react-bootstrap';
import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';

export default function UploadCar({ setState }) {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    about: '',
  });
  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };
  return (
    <div className="uploadCar mx-auto">
      <h1>Upload car</h1>
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="validationCustom04">
            <Form.Label className="m-0">Model</Form.Label>
            <Form.Control
              className="field"
              name="state"
              onChange={handleInputChange}
              placeholder="State"
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="validationCustom04">
            <Form.Label className="m-0">Model</Form.Label>
            <Form.Control
              className="field"
              name="state"
              onChange={handleInputChange}
              placeholder="State"
              type="text"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridRating" md="6">
          <Form.Label>Vehicle Makes</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>{}</option>
            {vehicleMakes.map((makes) => (
              <option key={uuidv4()} value={makes.value}>
                {makes.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-4" controlId="formGridRating" md="6">
            <Form.Label>Number of Seats</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>{}</option>
              {numberSeats.map((seats) => (
                <option key={uuidv4()} value={seats.value}>
                  {seats.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-4" controlId="formGridRating" md="6">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>{}</option>
              {vehicleType.map((type) => (
                <option key={uuidv4()} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Front Car Photo</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" /* onChange={fileHandler} */ type="file" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Back Car Photo</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" /* onChange={fileHandler} */ type="file" />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Front Car Photo</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" /* onChange={fileHandler} */ type="file" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Back Car Photo</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" /* onChange={fileHandler} */ type="file" />
          </Form.Group>
        </Row>

        <button className="btn btn-primary ms-4 me-5" type="submit">
          Submit
        </button>
        <button className="btn btn-primary" onClick={() => setState('profile')} type="button">
          Return to Profile
        </button>
      </Form>
    </div>
  );
}
