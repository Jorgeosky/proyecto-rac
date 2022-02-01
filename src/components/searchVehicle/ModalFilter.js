import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { SelectFilter } from './SelectFilter';

export function ModalFilter({ show, setShow }) {
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Modal
      className="modal-filter"
      onHide={handleClose}
      scrollable="on"
      show={show}
    >
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
          <Form.Group className="mb-4" controlId="ratingCheck">
            <Form.Label>Rating</Form.Label>
            <Form.Check id="rating" type="checkbox">
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label>User ratings</Form.Check.Label>
            </Form.Check>
          </Form.Group>

          <Form.Group className="mb-4" controlId="deluxeCheck">
            <Form.Label>Deluxe Class</Form.Label>
            <Form.Check id="deluxe" type="checkbox">
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label>Luxury Cars</Form.Check.Label>
            </Form.Check>
          </Form.Group>

          <SelectFilter />
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
