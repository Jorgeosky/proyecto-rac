import { createContext, useReducer } from 'react';
import { reducer, initialState } from './Reducer';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;
