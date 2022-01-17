import React from 'react';
import ProfileNavbar from '../components/profileNavbar';
import ProfileContent from '../components/profileContent';

export default function Profile() {
  return (
    <div className="profile">
      <ProfileNavbar />
      <div className="Content">
        <ProfileContent />
      </div>
    </div>
  )
}
