/* eslint-disable indent */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useProfile } from '../hooks/useProfile';

import EditProfile from './ProfileContent/EditProfile';
import ProfileInfo from './ProfileContent/ProfileInfo';
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
          <ProfileInfo setState={setStateProfile} update={update} />
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
          <UploadCar />
        </div>
      );
      break;

    default:
      content = <div className="profileContent">Hola Mundo</div>;
      break;
  }

  return (
    <Container fluid>
      {content}

      {/* {stateProfile === 'profile' && (
        <Container>
          <div className="d-flex justify-content-around gap-5">
            <button
              className="btn btn-primary"
              onClick={() => setStateProfile('editProfile')}
              type="button">
              Edit Profile
            </button>

            <button
              className="btn btn-primary"
              onClick={() => setStateProfile('editDocuments')}
              type="button">
              Upload Car
            </button>
          </div>
        </Container>
      )} */}
    </Container>
  );
}
