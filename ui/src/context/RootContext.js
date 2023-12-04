// src/context/TaskContext.js
import React, { createContext, useContext } from 'react';

// Context
const RootContext = createContext();

// Custom hook for using the context
const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

// Provider component
const RootProvider = ({
  children,
  currentUser,
  updateUserData,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <RootContext.Provider
      value={{ currentUser, updateUserData, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </RootContext.Provider>
  );
};

export { RootProvider, useRootContext };
