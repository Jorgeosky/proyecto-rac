import React from 'react';
import { Form } from 'react-bootstrap';
import {
	vehicleMakes,
	numberSeats,
	vehicleType,
} from '../../data/searchVehicle';

export const SelectFilter = () => {
	return (
		<>
			<Form.Group controlId="formGridRating" className="mb-4">
				<Form.Label>Vehicle Type</Form.Label>
				<Form.Select aria-label="Default select example">
					{vehicleType.map((type, index) => (
						<option key={index} value={type.value}>
							{type.label}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Form.Group controlId="formGridRating" className="mb-4">
				<Form.Label>Vehicle Makes</Form.Label>
				<Form.Select aria-label="Default select example">
					{vehicleMakes.map((makes, index) => (
						<option key={index} value={makes.value}>
							{makes.label}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Form.Group controlId="formGridRating" className="mb-4">
				<Form.Label>Number of Seats</Form.Label>
				<Form.Select aria-label="Default select example">
					{numberSeats.map((seats, index) => (
						<option key={index} value={seats.value}>
							{seats.label}
						</option>
					))}
				</Form.Select>
			</Form.Group>
		</>
	);
};
