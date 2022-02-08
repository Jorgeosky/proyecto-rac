import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { ownerSignUp } from '../api/owners';
import { SingUpSchema } from '../schemas/formSchemas';
import TypeUser from '../components/typeuser';
import UserContext from '../components/Context';
import { userSignUp } from '../api/users';
import { types } from '../types/types';
// import UserContext from '../components/Context';
// import { types } from '../types/types';

export default function SignUp() {
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState({ password1: false, password2: false });
  const { state, dispatch } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingUpSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const onSubmit = async (dataForm) => {
    if (terms) {
      console.log(dataForm);
      if (state.type === 'renter') {
        const { data } = await userSignUp({ ...dataForm, terms });
        if (data) {
          dispatch({
            type: types.signup,
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
            text: 'Esta cuenta ya esta registrada',
            icon: 'error',
            confirmButtonText: 'Done',
          });
        }
      } else {
        const { data } = await ownerSignUp({ ...dataForm, terms });
        if (data) {
          dispatch({
            type: types.signup,
            payload: {
              user: { ...data },
              isLoggedIn: true,
              type: 'owner',
            },
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Esta cuenta ya esta registrada',
            icon: 'error',
            confirmButtonText: 'Done',
          });
        }
      }
    }
  };
  return (
    <main>
      <div className="SignUp">
        {/*         <div className="separator">
          <h2>Create Account</h2>
        </div> */}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <TypeUser />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01" md="6">
              <Form.Control
                {...register('firstName')}
                className="field"
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
                {errors.firstName?.message}
              </p>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom02" md="6">
              <Form.Control
                {...register('lastName')}
                className="field"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
              <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
                {errors.lastName?.message}
              </p>
            </Form.Group>
          </Row>
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
          <Form.Group
            className="mb-3"
            controlId="validationCustom02"
            style={{ position: 'relative' }}>
            <Form.Control
              {...register('password')}
              className="field"
              name="password"
              placeholder="Password"
              type={showPassword.password1 ? 'text' : 'password'}
            />
            <span
              aria-hidden="true"
              className="passwordEye"
              onClick={() =>
                setShowPassword({ ...showPassword, password1: !showPassword.password1 })
              }>
              <i className="fas fa-eye fs-6" />
            </span>
            <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
              {errors.password?.message}
            </p>
          </Form.Group>

          <Form.Group controlId="validationCustom02" style={{ position: 'relative' }}>
            <Form.Control
              {...register('confirmPassword')}
              className="field"
              name="confirmPassword"
              placeholder="Confirm Password"
              type={showPassword.password2 ? 'text' : 'password'}
            />
            <span
              aria-hidden="true"
              className="passwordEye"
              onClick={() =>
                setShowPassword({ ...showPassword, password2: !showPassword.password2 })
              }>
              <i className="fas fa-eye fs-6" />
            </span>
            <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
              {errors.confirmPassword?.message}
            </p>
          </Form.Group>
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
          {!terms && (
            <p className="my-0 mt-2 ms-2" style={{ color: 'red', fontSize: '14px' }}>
              You must to accept the term of conditions
            </p>
          )}
          <button className="btn btn-primary btn-large btn-block mt-4" type="submit">
            Sign Up
          </button>
        </Form>
      </div>
    </main>
  );
}
