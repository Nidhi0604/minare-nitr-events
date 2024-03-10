// authProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged((user) => {
      // console.log('[From AuthProvider]', { user });
      if (user?.uid) {
        setUser(user);
        if (user.accessToken !== localStorage.getItem('accessToken')) {
          localStorage.setItem('accessToken', user.accessToken);
          window.location.reload();
        }
        setIsLoading(false);
        return;
      }

      // reset user info
      console.log('reset');
      setIsLoading(false);
      setUser({});
      localStorage.clear();
      // navigate('/login');
    });

    return () => {
      unsubscribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, auth }}> {/* Include auth object in context */}
      {/* {isLoading ? <CircularProgress /> : children} */}
      {children}
    </AuthContext.Provider>
  );
};
