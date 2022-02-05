import { useContext } from 'react';
import { Navigate } from 'react-router';
import UserContext from '../components/Context';

export const PublicRoute = ({ children }) => {
  const { state } = useContext(UserContext);

  return state.isLoggedIn ? <Navigate to="/profile" /> : children;
};
