import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavbarSearch } from './components/searchVehicle/NavbarSearch';
import CarPage from './pages/CarPage';
import ChangePassword from './pages/ChangePassword';
import ForgetPass from './pages/ForgetPass';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import SignUp from './pages/SignUp';
import { PrivateRoute } from './routes/PrivateRoutes';
import { PublicRoute } from './routes/PublicRoutes';

function App() {
  return (
    <>
      <NavbarSearch />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={(
            <PublicRoute>
              <Login />
            </PublicRoute>
          )}
          path="/signin"
        />
        <Route
          element={(
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          )}
          path="/profile"
        />
        <Route element={<ForgetPass />} path="/forgetpass" />
        <Route element={<ChangePassword />} path="/changepass" />
        <Route
          element={(
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          )}
          path="/signup"
        />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<CarPage />} path="/carpage" />
        {/* <Route element={<ConfirmEmail />} path="/confirmemail" />
        <Route path="/emailverified">
          <Route element={<EmailVerified />} path=":token" />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
