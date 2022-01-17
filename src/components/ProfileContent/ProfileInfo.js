import React from 'react';

export default function ProfileInfo() {
  const type = 'renter';
  return (
    <div className="profileInfo">
      <div className='top'>
        <img src='profile_icon.png' alt='profileImg' />
        <div>
          <h2>Username</h2>
          <h2>Rate: 4.5</h2>
        </div>
      </div>
      <div className='infoProfile'>
        <h5>E-Mail:</h5>
        <h5>Phone Number:</h5>
        <h5>city:</h5>
        {type === 'renter' ?? <h4>License Number:</h4>}
      </div>
      <div className='infoCars'>
        {type === 'renter' ?
          <div>Cars Rented</div> :
          <>
            <div>Your Cars</div>
            <div>Hired Cars</div>
            <div>Total Earn</div>
          </>
        }
      </div>
    </div >
  )
}
