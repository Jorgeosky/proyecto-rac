import React from 'react';

export default function ForgetPass() {
	return (
		<div className="ForgetPass">
			<form className="formu1">
				<h2>Forgot your Password?</h2>
				<h4>
					if you've lost your password or want to reset it enter your
					E-mail address
				</h4>
				<input
					className="email"
					type="email"
					name="email"
					id="email"
					placeholder="E-mail"
				/>
				<button type="submit" className="submit1">
					Reset Password
				</button>
			</form>
		</div>
	);
}
