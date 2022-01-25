import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import UserContext from '../Context';

export const NavbarSearch = () => {
	const { user } = useContext(UserContext);
	console.log(user);
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
					<nav className="navbar navbar-dark bg-dark mb-4">
						<div className="container">
							<span className="navbar-brand">
								<h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
							</span>
						</div>
					</nav>
					<NavDropdown title={
						<div className="header__user-icon fs-2 me-5 align-self-end">
							<i className="far fa-user-circle"></i>
						</div>
					} type='button' id="basic-nav-dropdown" >
						<NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
						<NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
						<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
						<NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
					</NavDropdown>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
