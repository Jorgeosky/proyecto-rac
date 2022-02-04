import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';
import { PrettoSlider } from './SliderPrice';

export function ModalFilter({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [value, setValue] = React.useState([30, 200]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const select1 = e.target[2].value;
    const select2 = e.target[3].value;
    const select3 = parseInt(e.target[4].value, 10) + 3 || '';
    console.log(select2);
    navigate(
      `?price_min=${value[0]}&price_max=${
        value[1]
      }&type=${select1}&make=${select2}&seats=${select3.toString()}`,
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
        <Modal.Body className="pe-5">
          <Form.Group className="mb-2" controlId="formGridRating">
            <Form.Label>Price</Form.Label>
            <p
              style={{
                fontFamily: 'Basis Grotesque Pro Medium',
                marginLeft: '4px',
                marginBottom: '0px',
              }}>{`$${value[0]} - $${value[1]}/day`}</p>
            <PrettoSlider
              aria-label="pretto slider"
              max={200}
              min={30}
              onChange={handleSliderChange}
              step={5}
              value={value}
              valueLabelDisplay="auto"
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
