import React, { /* useContext */ useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { sendUser } from '../api/users';
import { sendOwner } from '../api/owners';
import { SingUpSchema } from '../schemas/formSchemas';
import TypeUser from '../components/typeuser';
import UserContext from '../components/Context';
// import UserContext from '../components/Context';
// import { types } from '../types/types';

export default function SignUp() {
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState({ password1: false, password2: false });
  const { state } = useContext(UserContext);
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
      conditions: false,
    },
  });

  const navigate = useNavigate();
  const onSubmit = async (dataForm) => {
    if (terms) {
      console.log(dataForm);
      if (state.type === 'renter') {
        await sendUser({ ...dataForm, terms });
      } else {
        await sendOwner({ ...dataForm, terms });
      }
      navigate('/confirmemail');
    }
    /* event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = event.target.elements;

    await sendUser({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      terms,
    });
    navigate('/confirmemail'); */
  };
  return (
    <main>
      <div className="SignUp">
        {/* <div className="separator">
          <h2>Create Account</h2>
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TypeUser />
          <div className="names">
            <div className="nameErrors">
              <input
                {...register('firstName')}
                className="field"
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="nameErrors">
              <input
                {...register('lastName')}
                className="field"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
              <p>{errors.lastName?.message}</p>
            </div>
          </div>

          <input
            {...register('email')}
            className="field"
            name="email"
            placeholder="E-mail"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <div className="passwordField">
            <input
              {...register('password')}
              className="field"
              name="password"
              placeholder="Password"
              type={showPassword.password1 ? 'text' : 'password'}
            />
            <span
              aria-hidden="true"
              className="passwordEye"
              onClick={() => setShowPassword({ ...showPassword, password1: true })}>
              <i className="fas fa-eye" />
            </span>
          </div>
          <p>{errors.password?.message}</p>
          <div className="passwordField">
            <input
              {...register('confirmPassword')}
              className="field"
              name="confirmPassword"
              placeholder="Confirm Password"
              type={showPassword.password2 ? 'text' : 'password'}
            />
            <span
              aria-hidden="true"
              className="passwordEye"
              onClick={() => setShowPassword({ ...showPassword, password2: true })}>
              <i className="fas fa-eye" />
            </span>
          </div>

          <p>{errors.confirmPassword?.message}</p>
          <div className="confirm">
            <label htmlFor="checkbox">
              <input
                {...register('conditions')}
                id="checkbox"
                name="checkbox"
                onChange={() => setTerms(!terms)}
                type="checkbox"
              />
              I acccept the terms of Use & Privacy Policy
            </label>
          </div>
          {!terms && <p>You must to accept the term of conditions</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
