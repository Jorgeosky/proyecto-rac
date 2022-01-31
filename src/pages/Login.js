import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TypeUser from '../components/typeuser';
import UserExample from '../components/UserExample';
import UserContext from '../components/Context';

let type = '';

export default function Login() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function OnSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    if (UserExample.email === email.value && UserExample.password === password.value) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: { ...UserExample, type },
          isLoggedIn: true
        }
      });
      navigate('/profile');
    } else {
      alert('email or password incorrect!')
    }
  }

  return (
    <>
      <header className="header">
      </header>
      <main>
        <div className="Login">
          <div className="Container">
            <form onSubmit={OnSubmit}>
              <TypeUser type={type} />
              <h4>Hello, please fill the form to start</h4>
              <div className="Middle">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <button type="submit" className="submit">
                  Log in
                </button>
                <button className="google1">
                  <div className="google">
                    <img className="imgGoogle" src="Login-4.png" alt="img3" />
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
