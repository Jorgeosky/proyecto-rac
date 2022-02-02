import React from 'react';

export default function EditProfile() {
  return (
    <main>
      <div className="SignUp">
        <form>
          <div className="names">
            <div className="nameErrors">
              <input className="field" name="firstName" placeholder="First Name" type="text" />
            </div>
            <div className="nameErrors">
              <input className="field" name="lastName" placeholder="Last Name" type="text" />
            </div>
          </div>
          <div className="names">
            <div className="nameErrors">
              <input className="field" name="phone" placeholder="Phone" type="text" />
            </div>
            <div className="nameErrors">
              <input className="field" name="city" placeholder="City" type="text" />
            </div>
          </div>

          <input className="field" name="email" placeholder="E-mail" type="email" />
          <div className="passwordField">
            <input className="field" name="password" placeholder="Password" />
          </div>
          <div className="passwordField">
            <input className="field" name="confirmPassword" placeholder="Confirm Password" />
            <span aria-hidden="true" className="passwordEye">
              <i className="fas fa-eye" />
            </span>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
