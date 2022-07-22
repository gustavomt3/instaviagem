//React
import React from 'react';
//Styles
import styles from './Filter.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';

export const Filter = () => {
  const global = React.useContext(GlobalContext);
  return (
    <nav className={styles.containerFilter}>
      <p>Filter by:</p>
      <div className={styles.filters}>
        <div className={styles.divFilters}>
          <span>Accommodation</span>
        </div>
        <div className={styles.divFilters}>
          <span>Transport</span>
        </div>
        <div className={styles.divFilters}>
          <span>Attraction</span>
        </div>
      </div>
    </nav>
  );
};

export default Filter;
