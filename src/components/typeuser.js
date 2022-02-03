import React, { useContext, useState } from 'react';
import { types } from '../types/types';
import UserContext from './Context';

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
  const [user, setUser] = useState(false); // true: owner, false:renter
  // const [type, setType] = useState('renter');
  const { dispatch } = useContext(UserContext);

  const handleRenter = () => {
    setUser(false);

    dispatch({
      type: types.type,
      payload: { type: 'renter' },
    });
  };
  const handleOwner = () => {
    setUser(true);
    dispatch({
      type: types.type,
      payload: { type: 'owner' },
    });
  };

  return (
    <>
      <div className="Up">
        <h2>Chosse account type</h2>
        <div className="TypeUser">
          <div aria-hidden="true" className="Icon" onClick={handleOwner} role="button" tabIndex={0}>
            <img alt="img1" src="Login-2.png" style={user ? Aux1 : Aux2} />
            <h4 style={user ? Aux1 : Aux2}>Car Owner</h4>
          </div>
          <div
            aria-hidden="true"
            className="Icon"
            onClick={handleRenter}
            role="button"
            tabIndex={0}>
            <img alt="img2" src="Login-3.png" style={user ? Aux2 : Aux1} />
            <h4 style={user ? Aux1 : Aux2}>Car Renter</h4>
          </div>
        </div>
      </div>
      {/* <input className="typecar" id="typecar" name="typecar" type="text" value={type} /> */}
    </>
  );
}
