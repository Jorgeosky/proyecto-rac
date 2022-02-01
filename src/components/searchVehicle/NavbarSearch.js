import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import UserContext from '../Context';
import { types } from '../../types/types';

export function NavbarSearch() {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  return (
    <Navbar expand="sm" collapseOnSelect>
      <Container fluid>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Navbar.Brand className="ms-4">Rent A Car</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <NavDropdown
            id="basic-nav-dropdown"
            title={(
              <div className="header__user-icon fs-2 me-5 align-self-end">
                <i className="far fa-user-circle" />
              </div>
            )}
            type="button">
            {!state.isLoggedIn ? (
              <>
                <NavDropdown.Item className="dropItem" href="/signin">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item className="dropItem" href="/signup">
                  Sign Up
                </NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={() => dispatch({ type: types.signout })}>
                  Sign Out
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
