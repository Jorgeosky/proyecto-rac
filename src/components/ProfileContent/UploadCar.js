import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';
import { useCars } from '../../hooks/useCars';

export default function UploadCar({ setState }) {
  const [images, setImages] = useState({});
  const [inputs, setInputs] = useState({
    model: '',
    price: '',
  });
  const { model, price } = inputs;
  const {
    actions: { create },
  } = useCars();

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    const make = e.target[6].value;
    const seats = parseInt(e.target[7].value, 10) + 3;
    const type = e.target[8].value;

    const formData = new FormData();
    formData.append('model', model);
    formData.append('price', price);
    formData.append('make', make);
    formData.append('type', type);
    formData.append('seats', seats);
    formData.append('carFrontPhoto', images[0]);
    formData.append('photo1', images[1]);
    formData.append('photo2', images[2]);
    formData.append('photo3', images[3]);

    await create(formData);
    setState('profile');
  };
  return (
    <div className="uploadCar mx-auto">
      <h1>Upload car</h1>
      <Form onSubmit={handleUploadSubmit}>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="upload1">
            <Form.Label className="m-0 mb-1">Model</Form.Label>
            <Form.Control
              className="field"
              name="model"
              onChange={handleInputChange}
              placeholder="Model of Car"
              type="text"
              required
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="upload2" md="4">
            <Form.Label className="m-0 mb-1">Price per Day</Form.Label>
            <InputGroup className="inputGroup" hasValidation>
              <InputGroup.Text id="basic-addon1">$/day</InputGroup.Text>

              <Form.Control
                aria-describedby="inputGroupPrepend"
                className="field"
                name="price"
                onChange={handleInputChange}
                placeholder="price"
                step="0.01"
                type="number"
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Car Front Photo</Form.Label>
            <Form.Control
              accept=".jpg,.jpeg,.png"
              onChange={({ target }) => setImages({ ...images, 0: target.files[0] })}
              type="file"
              multiple
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Photo 1</Form.Label>
            <Form.Control
              accept=".jpg,.jpeg,.png"
              onChange={({ target }) => setImages({ ...images, 1: target.files[0] })}
              type="file"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Photo 2</Form.Label>
            <Form.Control
              accept=".jpg,.jpeg,.png"
              onChange={({ target }) => setImages({ ...images, 2: target.files[0] })}
              type="file"
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="photo" md="6">
            <Form.Label>Photo 3</Form.Label>
            <Form.Control
              accept=".jpg,.jpeg,.png"
              onChange={({ target }) => setImages({ ...images, 3: target.files[0] })}
              type="file"
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridRating" md="6">
          <Form.Label>Vehicle Makes</Form.Label>
          <Form.Select aria-label="Default select example" required>
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
            <Form.Select aria-label="Default select example" required>
              {numberSeats.map((seats) => (
                <option key={uuidv4()} value={seats.value}>
                  {seats.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-4" controlId="formGridRating" md="6">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Select aria-label="Default select example" required>
              {vehicleType.map((type) => (
                <option key={uuidv4()} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Form.Select>
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
