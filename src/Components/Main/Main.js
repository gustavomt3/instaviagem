import React from 'react';
//Components
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import CardModal from '../CardModal/CardModal';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  //Context
  const {
    modalCard,
    setModalCard,
    renderDataWithFilter,
    loading,
    data,
    dataWithFilter,
  } = React.useContext(GlobalContext);

  return (
    <>
      <Filter renderDataWithFilter={renderDataWithFilter} />
      <main className={styles.containerMain}>
        {loading && (
          <div className={styles.loading}>
            <p>Loading...</p>
          </div>
        )}
        <ul className={styles.containerCards}>
          {!loading &&
            data &&
            dataWithFilter.map((data) => {
              return (
                <Card key={data._id} data={data} setModalCard={setModalCard} />
              );
            })}
        </ul>
      </main>
      {modalCard && (
        <CardModal
          data={modalCard}
          loading={loading}
          setModalCard={setModalCard}
        />
      )}
    </>
  );
};

export default Main;
