import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TypeUser from '../components/typeuser';
import UserExample from '../components/UserExample';
import UserContext from '../components/Context';
import { types } from '../types/types';

const type = '';

export default function Login() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function OnSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);

    if (UserExample.email === email.value && UserExample.password === password.value) {
      dispatch({
        type: types.signin,
        payload: {
          user: { ...UserExample, type },
          isLoggedIn: true,
        },
      });
      navigate('/profile');
    } else {
      // alert('email or password incorrect!');
    }
  }

  return (
    <>
      <header className="header" />
      <main>
        <div className="Login">
          <div className="Container">
            <form onSubmit={OnSubmit}>
              <TypeUser type={type} />
              <h4>Hello, please fill the form to start</h4>
              <div className="Middle">
                <input id="email" name="email" placeholder="E-mail" type="email" />
                <input id="password" name="password" placeholder="Password" type="password" />
                <button className="submit" type="submit">
                  Log in
                </button>
                <button className="google1" type="button">
                  <div className="google">
                    <img alt="img3" className="imgGoogle" src="Login-4.png" />
                    <p>Continue with Google</p>
                  </div>
                </button>
              </div>
            </form>
            <div className="Down">
              <Link className="link1" to="/SignUp">
                Not account? Sign Up...
              </Link>
              <Link className="link1" to="/ForgetPass">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
