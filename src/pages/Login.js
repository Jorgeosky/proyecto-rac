import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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

let ImageCar1 = Aux2;
let ImageCar2 = Aux2;

function TypeImage(tipo) {
  type = tipo;
  if (tipo === 'Owner') {
    ImageCar1 = Aux1;
    ImageCar2 = Aux2;
  } else {
    ImageCar1 = Aux2;
    ImageCar2 = Aux1;
  }
  ReactDOM.render(<App />, document.getElementById('root'));
}

function Login() {
  return (
    <div class="Login">
      <div class="Image">
        <img class="ImageCars" src="login-1.jpg" alt="cars" />
      </div>
      <div class="Container">
        <form>
          <div class="Up">
            <h2>Chosse Account Type</h2>
            <div class="TypeUser">
              <div class="Icon" onClick={(e) => TypeImage('Owner')}>
                <img style={ImageCar1} src="Login-2.png" alt="img1" />
                <h4 style={ImageCar1}>Car Owner</h4>
              </div>
              <div class="Icon" onClick={(e) => TypeImage('Renter')}>
                <img style={ImageCar2} src="Login-3.png" alt="img2" />
                <h4 style={ImageCar2}>Car Renter</h4>
              </div>
            </div>
          </div>
          <div class="Middle">
            <h4>
              Hello{type === '' ? '' : ` Car ${type}`}, please fill the form to
              start
            </h4>
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

export { Login };
