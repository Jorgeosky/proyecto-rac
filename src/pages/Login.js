import React from 'react';
import { Link } from 'react-router-dom';
import TypeUser from '../components/typeuser';

let type = '';

export default function Login() {
  return (
    <div class="Login">
      <div class="Image">
        <img class="ImageCars" src="login-1.jpg" alt="cars" />
      </div>
      <div class="Container">
        <form>
          <TypeUser type={type} />
          <h4>
            Hello, please fill the form to start
          </h4>
          <div class="Middle">
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit" class="submit">
              LOGIN
            </button>
            <button class="google1">
              <div class="google">
                <img class="imgGoogle" src="Login-4.png" alt="img3" />
                <p>Or sing-in with google</p>
              </div>
            </button>
          </div>
        </form>
        <div class="Down">
          <Link class="link1" to="/SignUp">
            Not account? Sign Up...
          </Link>
          <Link class="link1" to="/ForgetPass">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
