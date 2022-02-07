import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import TypeUser from '../components/typeuser';
// import UserExample from '../components/UserExample';
import UserContext from '../components/Context';
import { types } from '../types/types';
import { SingInSchema } from '../schemas/formSchemas';
import { ownerSignIn } from '../api/owners';
import { userSignIn } from '../api/users';

const type = '';

export default function Login() {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function OnSubmit(dataForm) {
    if (state.type === 'renter') {
      const { data } = await userSignIn(dataForm);
      if (data) {
        dispatch({
          type: types.signin,
          payload: {
            user: { ...data },
            isLoggedIn: true,
            type: 'renter',
          },
        });
        navigate('/profile');
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'No estas registrado',
          icon: 'error',
          confirmButtonText: 'Done',
        });
      }
    } else {
      const { data } = await ownerSignIn(dataForm);
      if (data) {
        dispatch({
          type: types.signin,
          payload: {
            user: { ...data },
            isLoggedIn: true,
            type: 'owner',
          },
        });
        navigate('/profile');
      } else {
        console.log('hola');
        Swal.fire({
          title: 'Error!',
          text: 'No estas registrado',
          icon: 'error',
          confirmButtonText: 'Done',
        });
      }
    }
  }

  return (
    <>
      <header className="header" />
      <main>
        <div className="Login">
          <div className="Container">
            <Form onSubmit={handleSubmit(OnSubmit)}>
              <TypeUser type={type} />
              <h4>Hello, please fill the form to start</h4>

              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  {...register('email')}
                  className="field"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
                <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
                  {errors.email?.message}
                </p>
              </Form.Group>

              <Form.Group controlId="validationCustom02" style={{ position: 'relative' }}>
                <Form.Control
                  {...register('password')}
                  className="field"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                />
                <span
                  aria-hidden="true"
                  className="passwordEye"
                  onClick={() => setShowPassword(!showPassword)}>
                  <i className="fas fa-eye fs-6" />
                </span>
                <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
                  {errors.password?.message}
                </p>
              </Form.Group>

              <button className="btn btn-primary btn-large btn-block mt-4" type="submit">
                Log in
              </button>
              {/* <button className="google1" type="button">
                <div className="google">
                  <img alt="img3" className="imgGoogle" src="Login-4.png" />
                  <p>Continue with Google</p>
                </div>
              </button> */}
            </Form>
            <div className="Down">
              <Link className="link1" to="/SignUp">
                Not account? Sign Up...
              </Link>
              {/* <Link className="link1" to="/ForgetPass">
                Forgot Password?
              </Link> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
