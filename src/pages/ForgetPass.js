import React from 'react';

export default function ForgetPass() {
  return (
    <div class="ForgetPass">
      <form class="formu1">
        <h2>Forgot your Password?</h2>
        <h4>
          if you've lost your password or want to reset it enter your E-mail
          address
        </h4>
        <input
          class="email"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <button type="submit" class="submit1">
          Reset Password
        </button>
      </form>
    </div>
  );
}
