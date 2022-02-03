import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { EmailSchema } from '../schemas/formSchemas';

export default function ForgetPass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (email) => {
    console.log(email);
  };

  return (
    <div className="ForgetPass">
      <form className="formu1" onSubmit={handleSubmit(onSubmit)}>
        <h2>Forgot your Password?</h2>
        <h4>if you&apos;ve lost your password or want to reset it enter your E-mail address</h4>
        <input
          {...register('email')}
          className="email"
          name="email"
          placeholder="E-mail"
          type="email"
        />
        <p>{errors.email?.message}</p>
        <button className="submit1" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
