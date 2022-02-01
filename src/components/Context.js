import { createContext, useMemo, useReducer } from 'react';
import { initialState, reducer } from './Reducer';

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
