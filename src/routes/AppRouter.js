import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import ForgetPass from '../pages/ForgetPass';
import SignUp from '../pages/SignUp';
import SearchPage from '../pages/SearchPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/forgetpass" element={<ForgetPass />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/search" element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	);
};
