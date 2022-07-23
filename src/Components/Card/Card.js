import React from 'react';
//Styles
import styles from './Card.module.scss';
//Images
import iconHeart from '../../Assets/icon-heart.svg';
import iconHeartEmpty from '../../Assets/icon-heart-empty.svg';

const Card = ({ data, setModalCard }) => {
  const [favorite, setFavorite] = React.useState(false);

  const handleToggleFavorite = (event) => {
    event.preventDefault();
    setFavorite(!favorite);
  };

  function handleClick(event) {
    if (event.target.ariaLabel !== 'iconHeart') {
      setModalCard(data);
    }
  }

  return (
    <li className={styles.containerCard} onClick={handleClick}>
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
      <div className={styles.priceButton}>
        <span>Price: ${data.price}</span>
        <button onClick={handleToggleFavorite}>
          <img
            src={favorite ? iconHeart : iconHeartEmpty}
            alt="Icon Favorite"
            aria-label="iconHeart"
          />
        </button>
      </div>
    </li>
  );
};

export default Card;
