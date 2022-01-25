import React from 'react';

export default function SignUp() {
  return (
    <>
      <main>
        <div className="SignUp">
          <div className="separator">
            <h2>Create Account</h2>
          </div>
          <form>
            <div className="names">
              <input className="field" type="text" placeholder="First Name" />
              <input className="field" type="text" placeholder="Last Name" />
            </div>
            <input className="field" type="email" placeholder="E-mail" />
            <input className="field" type="password" placeholder="Password" />
            <input
              className="field"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="confirm">
              <label for="checkbox">
                <input id="checkbox" name="checkbox" type="checkbox" />I acccept
                the terms of Use {'&'} Privacy Policy
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </main>
    </>
  );
}
