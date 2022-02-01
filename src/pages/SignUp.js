import React from 'react';

export default function SignUp() {
  return (
    <main>
      <div className="SignUp">
        <div className="separator">
          <h2>Create Account</h2>
        </div>
        <form>
          <div className="names">
            <input className="field" placeholder="First Name" type="text" />
            <input className="field" placeholder="Last Name" type="text" />
          </div>
          <input className="field" placeholder="E-mail" type="email" />
          <input className="field" placeholder="Password" type="password" />
          <input
            className="field"
            placeholder="Confirm Password"
            type="password"
          />
          <div className="confirm">
            <label htmlFor="checkbox">
              <input id="checkbox" name="checkbox" type="checkbox" />
              I acccept
              the terms of Use
              &
              {' '}
              Privacy Policy
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
