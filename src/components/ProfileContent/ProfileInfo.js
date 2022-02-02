import React, { useContext } from 'react';
import UserContext from '../Context';

export default function ProfileInfo() {
  const type = 'renter';
  const { state } = useContext(UserContext);
  return (
    <div className="profileInfo">
      <div className="infoProfile">
        <h1 className="username">{`${state.user.firstName} ${state.user.lastName}.`}</h1>
        <div className="info">
          <p>User info</p>
          <ul>
            <li>
              <p>Email address</p>
              <p>{state.user.email}</p>
            </li>
            <li>
              <p>Phone number</p>
              <p>{state.user.number}</p>
            </li>
            <li>
              <p>City</p>
              <p>{state.user.city}</p>
            </li>
            <li>
              <p>Cars rented</p>
              <p>{state.user.city}</p>
            </li>
          </ul>
        </div>
        {type === 'renter' ?? <h4>License Number:</h4>}
      </div>
      <div className="userCard">
        <img alt="profileImg" src="profile_icon.png" />
      </div>

      {/* <div className="infoCars">
        {type === 'renter' ? (
          <div>Cars Rented</div>
        ) : (
          <>
            <div>Your Cars</div>
            <div>Hired Cars</div>
            <div>Total Earn</div>
          </>
        )}
      </div> */}
    </div>
  );
}
