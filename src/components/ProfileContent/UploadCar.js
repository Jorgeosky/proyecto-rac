import React, { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import Select from 'react-select';
import { PropagateLoader } from 'react-spinners';
import { numberSeats, vehicleDoors, vehicleMakes, vehicleType } from '../../data/searchVehicle';
import { useCars } from '../../hooks/useCars';

export default function UploadCar({ setState }) {
  const [selectedOptions, setSelectedOption] = useState({
    make: '',
    doors: '',
    seats: '',
    type: '',
  });
  const { make, doors, seats, type } = selectedOptions;
  const [inputs, setInputs] = useState({
    model: '',
    price: '',
  });
  const { model, price, description } = inputs;

  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    actions: { create },
  } = useCars();

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('model', model);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('make', make.value);
    formData.append('doors', doors.value);
    formData.append('type', type.value);
    formData.append('seats', seats.value);
    formData.append('carFrontPhoto', images[0]);
    formData.append('photo1', images[1]);
    formData.append('photo2', images[2]);
    formData.append('photo3', images[3]);
    await create(formData);
    setLoading(false);
    setState('profile');
  };
  return (
    <div className="uploadCar mx-auto">
      <h1>Upload car</h1>
      <Form onSubmit={handleUploadSubmit} style={{ opacity: loading ? '0.6' : '1' }}>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="upload1">
            <Form.Label className="m-0 mb-1">Model</Form.Label>
            <Form.Control
              className="field mt-0"
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
                className="field mt-0"
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
            <PropagateLoader
              color="#593cfb"
              loading={loading}
              size={25}
              style={{ marginTop: '600px' }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-3" controlId="formGridRating" md="6">
            <Form.Label>Vehicle Makes</Form.Label>
            <Select
              defaultValue={selectedOptions.make}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, make: options }))
              }
              options={vehicleMakes}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridRating" md="6">
            <Form.Label>Number of Doors</Form.Label>
            <Select
              defaultValue={selectedOptions.doors}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, doors: options }))
              }
              options={vehicleDoors}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-4" controlId="formGridRating" md="6">
            <Form.Label>Number of Seats</Form.Label>
            <Select
              defaultValue={selectedOptions.seats}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, seats: options }))
              }
              options={numberSeats}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-4" controlId="formGridRating" md="6">
            <Form.Label>Vehicle Type</Form.Label>
            <Select
              defaultValue={selectedOptions.type}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, type: options }))
              }
              options={vehicleType}
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-2" controlId="validationCustom06">
          <Form.Label className="m-0">Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={handleInputChange}
            placeholder="Write a description about your car"
            style={{ height: '80px' }}
          />
        </Form.Group>
        <div className="buttonsContainer">
          <button
            className="btn btn-primary btn-large ms-5 me-5"
            style={{ width: '40%' }}
            type="submit">
            Submit
          </button>
          <button
            className="btn btn-primary btn-large"
            onClick={() => setState('profile')}
            style={{ width: '40%' }}
            type="button">
            Return to Profile
          </button>
        </div>
      </Form>
    </div>
  );
}
