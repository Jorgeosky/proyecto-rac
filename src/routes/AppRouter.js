import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ForgetPass from '../pages/ForgetPass';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import ConfirmEmail from '../pages/ConfirmEmail';
import SearchPage from '../pages/SearchPage';
import { EmailVerified } from '../pages/EmailVerified';
import { NavbarSearch } from '../components/searchVehicle/NavbarSearch';
import { UserProvider } from '../components/Context';
import ChangePassword from '../pages/ChangePassword';
import EditProfile from '../pages/EditProfile';

export function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavbarSearch />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/signin" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<EditProfile />} path="/profile/editprofile" />
          <Route element={<ForgetPass />} path="/forgetpass" />
          <Route element={<ChangePassword />} path="/changepass" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<SearchPage />} path="/search" />
          <Route element={<ConfirmEmail />} path="/confirmemail" />
          <Route path="/emailverified">
            <Route element={<EmailVerified />} path=":token" />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
