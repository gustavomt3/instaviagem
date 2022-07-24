//React
import React from 'react';
//Styles
import styles from './MainFavorite.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Components
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';

const MainFavorite = () => {
  //Context
  const { whishilist, setModalCard, modalCard } =
    React.useContext(GlobalContext);

  return (
    <main className={styles.containerMainFavorite}>
      <ul className={styles.containerCards}>
        {whishilist.length > 0 ? (
          whishilist.map((data) => (
            <Card key={data._id} data={data} setModalCard={setModalCard} />
          ))
        ) : (
          <h1>Your List is Empty</h1>
        )}
      </ul>
      {modalCard && <CardModal data={modalCard} setModalCard={setModalCard} />}
    </main>
  );
};

export default MainFavorite;
