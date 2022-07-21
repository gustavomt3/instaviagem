import React from 'react';
//Styles
import styles from '../Components/Header/Header.module.scss';

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
