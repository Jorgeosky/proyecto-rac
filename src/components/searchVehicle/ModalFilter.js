import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { numberSeats, vehicleMakes, vehicleType } from '../../data/searchVehicle';
import { PrettoSlider } from './SliderPrice';

export function ModalFilter({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [value, setValue] = useState([30, 200]);
  const [selectedOptions, setSelectedOption] = useState({
    make: '',
    seats: '',
    type: '',
  });
  const { make, seats, type } = selectedOptions;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `?price_min=${value[0]}&price_max=${value[1]}&type=${type.value}&make=${make.value}&seats=${seats.value}`,
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
            <Form.Label>Vehicle Makes</Form.Label>
            <Select
              defaultValue={selectedOptions.make}
              menuPortalTarget={document.body}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, make: options }))
              }
              options={vehicleMakes}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 99999 }),
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGridRating">
            <Form.Label>Number of Seats</Form.Label>
            <Select
              defaultValue={selectedOptions.seats}
              menuPortalTarget={document.body}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, seats: options }))
              }
              options={numberSeats}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 99999 }),
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGridRating">
            <Form.Label>Vehicle Types</Form.Label>
            <Select
              defaultValue={selectedOptions.type}
              menuPortalTarget={document.body}
              onChange={(options) =>
                setSelectedOption((selected) => ({ ...selected, type: options }))
              }
              options={vehicleType}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 99999 }),
              }}
            />
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
