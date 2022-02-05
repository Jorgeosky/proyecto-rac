import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { NavbarSearch } from './components/searchVehicle/NavbarSearch';
import CarPage from './pages/CarPage';
import ChangePassword from './pages/ChangePassword';
import ConfirmEmail from './pages/ConfirmEmail';
import { EmailVerified } from './pages/EmailVerified';
import ForgetPass from './pages/ForgetPass';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <NavbarSearch />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/signin" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<ForgetPass />} path="/forgetpass" />
        <Route element={<ChangePassword />} path="/changepass" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<CarPage />} path="/carpage" />
        <Route element={<ConfirmEmail />} path="/confirmemail" />
        <Route path="/emailverified">
          <Route element={<EmailVerified />} path=":token" />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
