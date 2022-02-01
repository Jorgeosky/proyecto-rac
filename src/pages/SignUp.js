import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../api/users';
import UserContext from '../components/Context';
import { types } from '../types/types';

export default function SignUp() {
  const [terms, setTerms] = useState(false);
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = event.target.elements;

    const { data } = await userSignUp({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      terms,
    });
    if (data) {
      dispatch({
        type: types.signin,
        payload: {
          user: { ...data, type: 'Renter' },
          isLoggedIn: true,
        },
      });
      console.log(data);
      navigate('/emailverification');
    } else {
      console.log(data);
    }
  };
  return (
    <main>
      <div className="SignUp">
        <div className="separator">
          <h2>Create Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="names">
            <input className="field" name="firstName" placeholder="First Name" type="text" />
            <input className="field" name="lastName" placeholder="Last Name" type="text" />
          </div>
          <input className="field" name="email" placeholder="E-mail" type="email" />
          <input className="field" name="password" placeholder="Password" type="password" />
          <input
            className="field"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <div className="confirm">
            <label htmlFor="checkbox">
              <input
                id="checkbox"
                name="checkbox"
                onChange={() => setTerms(!terms)}
                type="checkbox"
              />
              I acccept the terms of Use & Privacy Policy
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
