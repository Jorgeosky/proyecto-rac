import { types } from '../types/types';

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
  case types.signin: {
    localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    return {
      isLoggedIn: action.payload.isLoggedIn,
      user: action.payload.user,
    };
  }
  case types.signup: {
    localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    return {
      isLoggedIn: action.payload.isLoggedIn,
      user: action.payload.user,
    };
  }
  case types.signout: {
    localStorage.clear();
    return {
      isLoggedIn: false,
      user: null,
    };
  }
  default:
    return state;
  }
};
