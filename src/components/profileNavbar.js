import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProfileNavbar() {
  return (
    <div className="profileNavbar">
      <Navbar>
        <Container>
          <a href="/profile" className="navbar-brand">
            <h4 style={{
              color: "rgba(35, 33, 48, 0.8)", fontWeight: "bold", WebkitTextStroke: "0.5px #a5a6f6"
            }}>My Profile</h4>
          </a>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
