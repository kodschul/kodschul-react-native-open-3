import {createContext, useContext, useState} from 'react';

const AuthContext = createContext({
  isLoggedIn: true,
  username: '',

  setLoggedIn: (value: any) => {},
  setUsername: (value: any) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider
      value={{isLoggedIn, setLoggedIn, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};
