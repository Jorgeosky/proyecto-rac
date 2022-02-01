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

export function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavbarSearch />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/signin" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<ForgetPass />} path="/forgetpass" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<SearchPage />} path="/search" />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
