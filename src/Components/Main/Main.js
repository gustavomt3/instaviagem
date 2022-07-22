import React from 'react';
//Components
import Card from '../Card/Card';
//Styles
import styles from './Main.module.scss';

const Main = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
    )
      .then((response) => response.json())
      .then((json) => setData(json), setLoading(false));
  }, []);

  console.log(data);

  return (
    <main className={styles.containerMain}>
      {loading && <p>Loading...</p>}
      <ul className={styles.containerCards}>
        {!loading &&
          data &&
          data.map((data) => {
            return <Card key={data._id} data={data} />;
          })}
      </ul>
    </main>
  );
};

export default Main;
