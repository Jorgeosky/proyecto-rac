import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useProfile } from '../hooks/useProfile';

import EditProfile from './ProfileContent/EditProfile';
import ProfileInfo from './ProfileContent/ProfileInfo';
import { RentedCar } from './ProfileContent/RentedCar';
import UploadCar from './ProfileContent/UploadCar';

export default function ProfileContent() {
  const {
    actions: { update },
  } = useProfile();

  const [stateProfile, setStateProfile] = useState('profile');
  let content;

  switch (stateProfile) {
  case 'profile':
    content = (
      <div className="profileContent">
        <ProfileInfo setState={setStateProfile} />
      </div>
    );
    break;
  case 'editProfile':
    content = (
      <div className="profileContent">
        <EditProfile setState={setStateProfile} update={update} />
      </div>
    );

    break;
  case 'editDocuments':
    content = (
      <div className="profileContent">
        <UploadCar setState={setStateProfile} />
      </div>
    );
    break;
  case 'rentedCars':
    content = (
      <div className="profileContent">
        <RentedCar setState={setStateProfile} />
      </div>
    );
    break;

  default:
    content = <div className="profileContent">Hola Mundo</div>;
    break;
  }

  return (
    <Container style={{ marginBottom: '100px' }} fluid>
      {content}
    </Container>
  );
}
