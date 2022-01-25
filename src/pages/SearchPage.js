import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { NavbarSearch } from '../components/searchVehicle/NavbarSearch.js';
import { SearchButtons } from '../components/searchVehicle/SearchButtons.js';
import { VehicleList } from '../components/searchVehicle/VehicleList.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
	margin: '0',
};

const center = {
	lat: -8.1022,
	lng: -79.0493,
};

export default function SearchPage() {
	return (
		<>
			<header className="header">
				<NavbarSearch />
				<div className="header__filter d-flex">
					<SearchButtons />
				</div>
			</header>
			<main>
				<Container fluid className="mb-5">
					<Row>
						<Col md={8}>
							<VehicleList />
						</Col>
						<Col md={4}>
							<div className="main__searchResultsMap">
								<div className="main__searchResultsMap-container">
									<LoadScript googleMapsApiKey="AIzaSyAl7cTqz14ZfDsX376FmiAKxngvBk3CQ7A">
										<GoogleMap
											mapContainerStyle={containerStyle}
											center={center}
											zoom={16}>
											{/* Child components, such as markers, info windows, etc. */}
											<></>
										</GoogleMap>
									</LoadScript>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	);
}
