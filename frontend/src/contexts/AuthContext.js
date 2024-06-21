import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return authService.login(email, password).then(user => {
      setCurrentUser(user);
    });
  }

  function logout() {
    return authService.logout().then(() => {
      setCurrentUser(null);
    });
  }

  function signup(email, password) {
    return authService.signup(email, password).then(user => {
      setCurrentUser(user);
    });
  }

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};