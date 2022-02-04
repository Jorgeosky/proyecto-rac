import React from 'react';
import ProfileContent from '../components/profileContent';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profileBanner" />
      <div className="Content">
        <ProfileContent />
      </div>
    </div>
  );
}
