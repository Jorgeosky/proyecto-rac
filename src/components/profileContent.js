import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import EditProfile from './ProfileContent/EditProfile';
import Messages from './ProfileContent/Messages';
import ProfileInfo from './ProfileContent/ProfileInfo';
import UploadCar from './ProfileContent/UploadCar';
// import UserContext from './Context';

// const styleNav2 = {
//   color: 'rgba(35, 33, 48, 0.8)',
//   fontWeight: 'bold',
//   WebkitTextStroke: '0.5px #a5a6f6',
//   borderRadius: '20px',
// };

// const styleNav = {
//   background: 'lightgray',
//   borderRadius: '20px',
//   ...styleNav2,
// };

export default function ProfileContent() {
  const [stateProfile, setStateProfile] = useState('profile');
  // const { state } = useContext(UserContext);
  let content;

  switch (stateProfile) {
  case 'profile':
    content = (
      <div className="profileContent">
        <ProfileInfo />
      </div>
    );
    break;
  case 'editProfile':
    content = (
      <div className="profileContent">
        <EditProfile />
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
  case 'messages':
    content = (
      <div className="profileContent">
        <Messages />
      </div>
    );
    break;
  default:
    content = <div className="profileContent">Hola Mundo</div>;
    break;
  }

  return (
    <>
      <div className="profileOptions">
        <Nav className="itemListProfile" onClick={() => setStateProfile('editProfile')}>
          {' '}
          Edit Profile
        </Nav>
        <Nav className="itemListProfile" onClick={() => setStateProfile('editDocuments')}>
          {' '}
          Upload car
        </Nav>
        <Nav className="itemListProfile" onClick={() => setStateProfile('messages')}>
          {' '}
          Messages
        </Nav>
      </div>
      {content}
    </>
  );
}
