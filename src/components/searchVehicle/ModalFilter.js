import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';
import { PrettoSlider, useStyles } from './SliderPrice';

export function ModalFilter({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [value, setValue] = React.useState(50);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const slide = e.target[0].value;
    const select1 = e.target[1].value;
    const select2 = e.target[2].value;
    const select3 = parseInt(e.target[3].value, 10) + 3 || '';
    navigate(
      `?price=${slide}&vehicletype=${select1}&vehiclemake=${select2}&numberseats=${select3.toString()}`,
    );

    setShow(false);
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal className="modal-filter" onHide={handleClose} scrollable="on" show={show}>
      <div className="mt-3 me-3 text-end">
        <button
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="modal"
          onClick={handleClose}
          type="button"
        />
      </div>
      <Form className="ms-3" onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-2" controlId="formGridRating">
            <Form.Label>Price</Form.Label>
            <p className={classes.price}>{`$50 - ${value}/day`}</p>
            <PrettoSlider
              aria-label="pretto slider"
              defaultValue={50}
              max={300}
              min={50}
              onChange={handleSliderChange}
              step={5}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridRating">
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
          <Form.Group className="mb-4" controlId="formGridRating">
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
          <Form.Group className="mb-4" controlId="formGridRating">
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
        </Modal.Body>
        <Modal.Footer className="ms-3 py-3 justify-content-start ">
          <button className="btn btn-primary py-1" type="submit">
            Applied filters
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
