import React from 'react';

export default function SignUp() {
  return (
    <div class="SignUp">
      <div class="separator">
        <h2>Create Account</h2>
      </div>
      <form>
        <div class="names">
          <input class="field" type="text" placeholder="First Name" />
          <input class="field" type="text" placeholder="Last Name" />
        </div>
        <input class="field" type="email" placeholder="E-mail" />
        <input class="field" type="password" placeholder="Password" />
        <input class="field" type="password" placeholder="Confirm Password" />
        <div class="confirm">
          <label for="checkbox">
            <input id="checkbox" name="checkbox" type="checkbox" />I acccept the
            terms of Use {'&'} Privacy Policy
          </label>
        </div>
        <button type="submit">
          <h2>Register Now</h2>
        </button>
      </form>
    </div>
  );
}
