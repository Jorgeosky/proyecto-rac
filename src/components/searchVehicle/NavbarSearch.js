import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
export const NavbarSearch = () => {
	return (
		<Navbar collapseOnSelect expand="sm">
			<Container fluid>
				<Link style={{ textDecoration: "none" }} to="/">
					<Navbar.Brand className="ms-4" href="#">
						Rent A Car
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Link to="/profile">
						<div className="header__user-icon fs-2 me-5 align-self-end">
							<i className="far fa-user-circle"></i>
						</div>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
