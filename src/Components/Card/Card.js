import React from 'react';
//Styles
import styles from './Card.module.scss';

const Card = ({ data }) => {
  return (
    <li className={styles.containerCard}>
      <div className={styles.nameAddress}>
        <h1>{data.name}</h1>
        <h2>{data.address}</h2>
      </div>
      <div className={styles.cardPhoto}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.aboutCard}>
        <p>{data.about}</p>
      </div>
      <div className={styles.priceCard}>
        <span>Price: ${data.price}</span>
      </div>
    </li>
  );
};

export default Card;
