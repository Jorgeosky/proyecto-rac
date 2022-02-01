import React from 'react';

export default function ForgetPass() {
  return (
    <div className="ForgetPass">
      <form className="formu1">
        <h2>Forgot your Password?</h2>
        <h4>if you&apos;ve lost your password or want to reset it enter your E-mail address</h4>
        <input className="email" id="email" name="email" placeholder="E-mail" type="email" />
        <button className="submit1" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
