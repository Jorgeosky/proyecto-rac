import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ownerSignUp } from '../api/owners';
import { userSignUp } from '../api/users';
import UserContext from '../components/Context';
import { types } from '../types/types';
import '../styles/components/_emailVerified.scss'

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
    <div className="contenedor">
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <h5 className="card-title">Welcome...</h5>
        <h6 className="card-subtitle mb-2 text-muted">Email Verified!!</h6>
        <button onClick={handleSignUp} type="button">
          Go to Home{' '}
        </button>
      </div>
    </div>
  );
}
