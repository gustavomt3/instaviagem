import React from 'react';
//Components
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      <Filter renderDataWithFilter={global.renderDataWithFilter} />
      <main className={styles.containerMain}>
        {global.loading && (
          <div className={styles.loading}>
            <p>Loading...</p>
          </div>
        )}
        <ul className={styles.containerCards}>
          {!global.loading &&
            global.data &&
            global.dataWithFilter.map((data) => {
              return <Card key={data._id} data={data} />;
            })}
        </ul>
      </main>
    </>
  );
};

export default Main;
