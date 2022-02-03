import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

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
    <div className="carForm">
      <h1>Upload car</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom01" md="6">
            <Form.Label className="m-0">First Name</Form.Label>
            <Form.Control
              className="field"
              name="firstName"
              onChange={handleInputChange}
              placeholder="First Name"
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02" md="6">
            <Form.Label className="m-0">Last Name</Form.Label>
            <Form.Control
              className="field"
              name="lastName"
              onChange={handleInputChange}
              placeholder="Last Name"
              type="text"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03" md="6">
            <Form.Label className="m-0">Country</Form.Label>
            <Form.Control
              className="field"
              name="country"
              onChange={handleInputChange}
              placeholder="Country"
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom04" md="6">
            <Form.Label className="m-0">State</Form.Label>
            <Form.Control
              className="field"
              name="state"
              onChange={handleInputChange}
              placeholder="State"
              type="text"
            />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Upload your photo profile</Form.Label>
          <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
        </Form.Group> */}
        <Form.Group as={Col} className="mb-2" controlId="validationCustom06">
          <Form.Label className="m-0">About</Form.Label>
          <Form.Control
            as="textarea"
            name="about"
            onChange={handleInputChange}
            placeholder="Write about you"
            style={{ height: '80px' }}
          />
        </Form.Group>
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
