import { useContext } from 'react';
import useSWR from 'swr';
import { getOwnerProfile, updateOwnerProfile } from '../api/ownerprofile';
import { getUserProfile, updateUserProfile } from '../api/userprofile';
import UserContext from '../components/Context';
import { types } from '../types/types';

export const useProfile = () => {
  const { state, dispatch } = useContext(UserContext);
  const path = `/${state.type === 'renter' ? 'users' : 'owners'}/profile`;

  const { data, error, mutate } = useSWR(path, async () => {
    const response = state.type === 'renter' ? await getUserProfile() : await getOwnerProfile();
    dispatch({
      type: types.profile,
      payload: {
        user: response.data,
      },
    });
    return response.data;
  });

  async function updateProfile(payload) {
    const response =
      state.type === 'renter'
        ? await updateUserProfile(payload)
        : await updateOwnerProfile(payload);
    mutate(response.data, true);
  }
  return {
    data,
    error,
    actions: {
      update: updateProfile,
    },
  };
};
