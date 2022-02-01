import React, { useState } from 'react';

let type = '';
const Aux1 = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  opacity: '1',
  color: '#8c7777',
  textAlign: 'center',
  margin: '0',
};

const Aux2 = {
  width: '70%',
  height: '70%',
  borderRadius: '10px',
  opacity: '0.5',
  color: '#8c7777',
  textAlign: 'center',
  margin: '0',
};

export default function TypeUser() {
  console.log(type);

  const [image1, setImage1] = useState(0);
  const [image2, setImage2] = useState(0);

  let ImageCar1 = Aux2;
  let ImageCar2 = Aux2;

  if (image1 === 1) {
    ImageCar1 = Aux1;
    ImageCar2 = Aux2;
  }
  if (image2 === 1) {
    ImageCar1 = Aux2;
    ImageCar2 = Aux1;
  }
  return (
    <>
      <div className="Up">
        <h2>Chosse account type</h2>
        <div className="TypeUser">
          <div
            aria-hidden="true"
            className="Icon"
            onClick={() => {
              type = 'Owner';
              if (image1 === 0) {
                setImage1(image1 + 1);
              }
              if (image2 === 1) {
                setImage2(image2 - 1);
              }
            }}
            role="button"
            tabIndex={0}>
            <img alt="img1" src="Login-2.png" style={ImageCar1} />
            <h4 style={ImageCar1}>Car Owner</h4>
          </div>
          <div
            aria-hidden="true"
            className="Icon"
            onClick={() => {
              type = 'Renter';
              if (image2 === 0) {
                setImage2(image2 + 1);
              }
              if (image1 === 1) {
                setImage1(image1 - 1);
              }
            }}
            role="button"
            tabIndex={0}>
            <img alt="img2" src="Login-3.png" style={ImageCar2} />
            <h4 style={ImageCar2}>Car Renter</h4>
          </div>
        </div>
      </div>
      <input className="typecar" id="typecar" name="typecar" type="text" value={type} />
    </>
  );
}
