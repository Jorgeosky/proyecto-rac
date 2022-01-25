import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Formulario from './ProfileContent/Formulario'
import Messages from './ProfileContent/Messages'
import ProfileInfo from './ProfileContent/ProfileInfo';

const styleNav2 = {
  color: "rgba(35, 33, 48, 0.8)",
  fontWeight: "bold",
  WebkitTextStroke: "0.5px #a5a6f6",
  borderRadius: '20px',
}

const styleNav = {
  background: 'lightgray',
  borderRadius: '20px',
  ...styleNav2,
}

export default function ProfileContent() {
  const [stateProfile, setStateProfile] = useState('profile');
  let content = <></>;

  switch (stateProfile) {
    case 'profile':
      content =
        <div className="profileContent">
          <ProfileInfo />
        </div>;
      break;
    case 'editProfile':
      content =
        <div className="profileContent">
          <Formulario />
        </div>;
      break;
    case 'editDocuments':
      content =
        <div className="profileContent">
          Editar Documentos
        </div>;
      break;
    case 'messages':
      content =
        <div className="profileContent">
          <Messages />
        </div>;
      break;
    default:
      content =
        <div className="profileContent">
          Hola Mundo
        </div>
      break;
  }

  return (
    <>
      <div className="profileOptions">
        <Nav className="itemListProfile" style={stateProfile === 'editProfile' ? styleNav : styleNav2} onClick={() => setStateProfile('editProfile')}>
          Edit Profile
        </Nav>
        <Nav className="itemListProfile" style={stateProfile === 'editDocuments' ? styleNav : styleNav2} onClick={() => setStateProfile('editDocuments')}>
          Upload Your Docs
        </Nav>
        <Nav className="itemListProfile" style={stateProfile === 'messages' ? styleNav : styleNav2} onClick={() => setStateProfile('messages')}>
          Messages
        </Nav>
      </div>
      {content}
    </>
  );
}
