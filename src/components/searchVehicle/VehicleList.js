import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { carData } from '../../data/searchVehicle';
import { VehicleCard } from './VehicleCard';

export const VehicleList = () => {
	return (
		<Container fluid className="mt-5 pe-3">
			<Row sm={2} className="g-4">
				{carData.map((car, index) => (
					<VehicleCard key={index} {...car} />
				))}
			</Row>
		</Container>
	);
};
