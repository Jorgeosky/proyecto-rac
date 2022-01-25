import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ForgetPass from '../pages/ForgetPass';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import { NavbarSearch } from '../components/searchVehicle/NavbarSearch';
import { UserProvider } from '../components/Context';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<NavbarSearch />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/forgetpass" element={<ForgetPass />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/search" element={<SearchPage />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};
