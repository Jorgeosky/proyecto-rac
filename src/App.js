import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { NavbarSearch } from './components/searchVehicle/NavbarSearch';
import CarPage from './pages/CarPage';
import ChangePassword from './pages/ChangePassword';
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

        <Route path="/car-rental">
          <Route element={<CarPage />} path=":carID" />
        </Route>

        {/* <Route element={<ConfirmEmail />} path="/confirmemail" />
        <Route path="/emailverified">
          <Route element={<EmailVerified />} path=":token" />
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
