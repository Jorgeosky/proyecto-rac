import React from 'react';

export default function EditProfile() {
  return (
    <main>
      <div className="editProfile">
        <h1>Edit profile</h1>
        <form>
          <div className="doubleInput">
            <div className="nameErrors">
              <input className="field" name="firstName" placeholder="First name" type="text" />
            </div>
            <div className="nameErrors">
              <input className="field" name="lastName" placeholder="Last name" type="text" />
            </div>
          </div>
          <div className="doubleInput">
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
            <span aria-hidden="true" className="passwordEye">
              <i className="fas fa-eye" />
            </span>
          </div>
          <div className="passwordField">
            <input className="field" name="confirmPassword" placeholder="Confirm Password" />
            <span aria-hidden="true" className="passwordEye">
              <i className="fas fa-eye" />
            </span>
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </main>
  );
}
