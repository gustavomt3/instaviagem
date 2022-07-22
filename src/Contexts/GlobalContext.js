import React from 'react';
//Styles

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
