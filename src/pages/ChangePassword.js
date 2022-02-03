import React from 'react';

export default function ChangePassword() {
  return (
    <div className="ForgetPass">
      <form className="formu1">
        <h2>Change your Password</h2>
        <h4>Please put your new password in the fields</h4>
        <input className="password" name="password" placeholder="Password" type="password" />
        <input
          className="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
        <button className="submit1" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
}
