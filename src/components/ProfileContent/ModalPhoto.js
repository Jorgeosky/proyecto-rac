import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { updateOwnerPhoto } from '../../api/ownerprofile';

export function ModalPhoto({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();

  const fileHandler = ({ target }) => {
    const file = target.files[0];
    setPhoto(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', photo);
      await updateOwnerPhoto(formData);

      setLoading(false);
      handleClose();
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
          <Form.Group controlId="photo">
            <Form.Label className="mb-3">Upload your photo profile</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="mt-4 py-3 justify-content-center ">
          <button className="btn btn-primary py-1" disabled={loading} type="submit">
            Upload your Photo
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
