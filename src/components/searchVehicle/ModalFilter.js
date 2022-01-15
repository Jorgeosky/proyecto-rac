import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { SelectFilter } from './SelectFilter';
export const ModalFilter = ({ show, setShow }) => {
	const handleClose = () => setShow(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<Modal
			className="modal-filter"
			show={show}
			onHide={handleClose}
			scrollable="on">
			<div className="mt-3 me-3 text-end">
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
					onClick={handleClose}></button>
			</div>
			<Form className="ms-3" onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Group controlId="ratingCheck" className="mb-4">
						<Form.Label>Rating</Form.Label>
						<Form.Check type="checkbox" id="rating">
							<Form.Check.Input type="checkbox" isValid />
							<Form.Check.Label>User ratings</Form.Check.Label>
						</Form.Check>
					</Form.Group>

					<Form.Group controlId="deluxeCheck" className="mb-4">
						<Form.Label>Deluxe Class</Form.Label>
						<Form.Check type="checkbox" id="deluxe">
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
};
