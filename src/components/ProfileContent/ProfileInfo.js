import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import UserContext from '../Context';
import { ModalPhoto } from './ModalPhoto';
import { CLOUD_NAME } from '../../api/consts';

export default function ProfileInfo({ setState }) {
  const {
    state: { user, type },
  } = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);
  const handleModalOpen = () => setModalShow(true);
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });
  const image = cld.image(user.photo);

  return (
    <>
      <Row className="g-2 pt-5 mb-3 mt-2">
        <Col className="p-0 " md={5} sm={6}>
          <div className="userCard">
            <div
              aria-hidden="true"
              className="align-self-center cursor-pointer"
              onClick={handleModalOpen}
              role="button"
              style={{ marginRight: '85px' }}>
              {image.publicID ? (
                <AdvancedImage
                  className="card-img-top"
                  cldImg={image}
                  style={{
                    marginTop: '16px',
                    width: '135px',
                    height: '148px',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <img alt="profileImg" src="profile_icon.png" />
              )}
            </div>
            <div className="pe-5">
              <p className="featureTitle">About</p>
              <div className="aboutBox">
                <p className="profileAbout">{user.about}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="p-0 " md={7} sm={6}>
          <div className="infoProfile px-3">
            <h1 className="username">{`${user.firstName} ${user.lastName[0]}.`}</h1>
            <p className="joinedTime">Joined {format(new Date(user.createdAt), 'MMM yyyy')}</p>
            <div className="info">
              <p className="featureTitle">User info</p>
              <ul>
                <li>
                  <p>Email address:</p>
                  <p>{user.email}</p>
                </li>
                <li>
                  <p>Phone number:</p>
                  <p>{user.cellphone}</p>
                </li>
                <li>
                  <p>Country:</p>
                  <p>{user.country}</p>
                </li>
                <li>
                  <p>State:</p>
                  <p>{user.state}</p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <div className="d-flex justify-content-between px-2">
          <button
            className="btn btn-primary btn-large" id="editProfile"
            onClick={() => setState('editProfile')}
            type="button">
            Edit Profile
          </button>
          {type === 'renter' ? (
            <button
              className="btn btn-primary btn-large" id="rentedCar"
              onClick={() => setState('rentedCars')}
              type="button">
              Rented car
            </button>
          ) : (
            <button
              className="btn btn-primary btn-large" id="uploadCar"
              onClick={() => setState('editDocuments')}
              type="button">
              Upload Car
            </button>
          )}
        </div>
      </Container>
      <ModalPhoto setShow={setModalShow} show={modalShow} />
    </>
  );
}
