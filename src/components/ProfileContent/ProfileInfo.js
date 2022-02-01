import React, { useContext } from 'react';
import UserContext from '../Context';

export default function ProfileInfo() {
  const type = 'renter';
  const { state } = useContext(UserContext);
  return (
    <div className="profileInfo">
      <div className="top">
        <img alt="profileImg" src="profile_icon.png" />
        <div>
          <h2>
            Username:
            {`${state.user.firstName} ${state.user.lastName}`}
          </h2>
          <h2>Rate: 4.5</h2>
        </div>
      </div>
      <div className="infoProfile">
        <h5>
          E-Mail:
          {state.user.email}
        </h5>
        <h5>
          Phone Number:
          {state.user.number}
        </h5>
        <h5>
          city:
          {state.user.city}
        </h5>
        {type === 'renter' ?? <h4>License Number:</h4>}
      </div>
      <div className="infoCars">
        {type === 'renter' ? (
          <div>Cars Rented</div>
        ) : (
          <>
            <div>Your Cars</div>
            <div>Hired Cars</div>
            <div>Total Earn</div>
          </>
        )}
      </div>
    </div>
  );
}
