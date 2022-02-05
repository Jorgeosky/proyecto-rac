import { useContext } from 'react';
import { Navigate } from 'react-router';
import UserContext from '../components/Context';

export const PrivateRoute = ({ children }) => {
  const { state } = useContext(UserContext);
  return state.isLoggedIn ? children : <Navigate to="/signin" />;
};
