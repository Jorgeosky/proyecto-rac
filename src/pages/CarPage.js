import React from 'react';

export default function CarPage() {
  return (
    <div className="carPage">
      <div className="carCard">
        <img alt="carImg" className="carImg" src="carImg.jpg" />
        <div className="carInfo">
          <p>Juan&apos;s</p>
          <p id="model">BMW M4CS</p>
        </div>
      </div>
      <div className="priceCar">
        <div className="priceCarContainer">
          <p>$140/day</p>
          <button type="submit">Go to pay</button>
        </div>
      </div>
      <div className="hostedInfo">
        <h2>HOSTED BY</h2>
        <div className="hostedInfoCard">
          <img alt="hosted" src="profile_icon.png" />

          <ul>
            <li>
              <span className="hostedName">Juan Vargas.</span>
            </li>
            <li>
              <p>Phone number:</p>
              <p>310 359 8745</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
