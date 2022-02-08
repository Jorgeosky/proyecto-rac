import React from 'react';

export const HomeCard = ({ url, model }) => (
  <div className="carCard">
    <div className="cardPhoto">
      <img alt="CAR" src={url} />
    </div>
    <p>{model}</p>
  </div>
);
