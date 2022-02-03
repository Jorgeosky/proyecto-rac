import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ownerSignUp } from '../api/owners';
import { userSignUp } from '../api/users';
import UserContext from '../components/Context';
import { types } from '../types/types';

export function EmailVerified() {
  const navigate = useNavigate();
  const { token } = useParams();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    async function getUser() {
      if (state.type === 'renter') {
        const { data } = await userSignUp({ token });
        dispatch({
          type: types.signup,
          payload: {
            user: { ...data },
            isLoggedIn: true,
          },
        });
      } else {
        const { data } = await ownerSignUp({ token });
        dispatch({
          type: types.signup,
          payload: {
            user: { ...data },
            isLoggedIn: true,
          },
        });
      }
    }
    getUser();
  }, [dispatch, state.type, token]);

  return (
    <div className="containerEmail centerEmail">
      <div className="cardEmail">
        <h1>Welcome!</h1>
        <hr />
        <p>Your email has been successfully verified.</p>
        <button
          onClick={() => {
            dispatch({ type: types.signout });
            navigate('/signin');
          }}
          type="button">
          Go to Home
        </button>
      </div>
    </div>
  );
}
