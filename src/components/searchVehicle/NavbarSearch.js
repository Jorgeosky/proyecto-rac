import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import UserContext from '../Context';
import { types } from '../../types/types';
import { CLOUD_NAME } from '../../api/consts';

export function NavbarSearch() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch({ type: types.signout });
    navigate('/signin');
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  // const image = cld.image(state.user.photo);
  return (
    <Navbar expand="sm" collapseOnSelect>
      <Container fluid>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Navbar.Brand className="ms-4">Rent A Car</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-search" href="/search">
              Search
            </Nav.Link>
          </Nav>
          <NavDropdown
            id="basic-nav-dropdown"
            title={
              state.isLoggedIn ? (
                state.user.photo ? (
                  <AdvancedImage
                    className="card-img-top"
                    cldImg={cld.image(state.user.photo)}
                    style={{
                      marginTop: '5px',
                      width: '36px',
                      height: '38px',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <div className="header__user-icon fs-2 me-4 align-self-end">
                    <i className="far fa-user-circle" />
                  </div>
                )
              ) : (
                <div className="header__user-icon fs-2 me-4 align-self-end">
                  <i className="far fa-user-circle" />
                </div>
              )
            }
            type="button">
            {!state.isLoggedIn ? (
              <>
                <NavDropdown.Item as={Link} className="dropItem" to="/signin">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} className="dropItem" to="/signup">
                  Sign Up
                </NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onSignOut}>Sign Out</NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
