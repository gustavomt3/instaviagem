import React from 'react';
//Components
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import CardModal from '../CardModal/CardModal';
//Context
// import { GlobalContext } from '../../Contexts/GlobalContext';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  // const global = React.useContext(GlobalContext);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [dataWithFilter, setDataWithFilter] = React.useState([]);
  const [filtering, setFiltering] = React.useState(false);
  const [modalCard, setModalCard] = React.useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
      );
      const data = await response.json();
      const dataAlf = data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setData(dataAlf);
      setDataWithFilter(dataAlf);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  const renderDataWithFilter = (filter) => {
    const withFilter = data.filter((x) => x.type === filter);
    setDataWithFilter(withFilter);
    setFiltering(!filtering);
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (!filtering) {
      setDataWithFilter(data);
    }
  }, [filtering]);

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
        {modalCard && (
          <CardModal
            data={modalCard}
            loading={loading}
            setModalCard={setModalCard}
          />
        )}
      </main>
    </>
  );
};

export default Main;
