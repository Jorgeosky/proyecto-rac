import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ownerSignUp } from '../api/owners';
import { userSignUp } from '../api/users';
import UserContext from '../components/Context';
import { types } from '../types/types';

export function EmailVerified() {
  const navigate = useNavigate();
  const { token: payload } = useParams();
  const { state, dispatch } = useContext(UserContext);
  console.log(payload);
  const handleSignUp = async () => {
    try {
      if (state.type === 'renter') {
        const { data } = await userSignUp({ token: payload });
        dispatch({
          type: types.signup,
          payload: {
            user: { ...data, type: 'Owner' },
            isLoggedIn: true,
          },
        });
      } else {
        const { data } = await ownerSignUp({ token: payload });
        dispatch({
          type: types.signup,
          payload: {
            user: { ...data, type: 'Owner' },
            isLoggedIn: true,
          },
        });
      }

      navigate('/profile');
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'No estas registrado',
        icon: 'error',
        confirmButtonText: 'Done',
      });
    }
  };
  return (
    <div className="container center">
      <div className="card">
        <h1>Welcome!</h1>
        <hr />

        <p>Your email has been successfully verified.</p>
        <button onClick={handleSignUp} type="button">
          Go to Home
        </button>
      </div>
    </div>
  );
}
