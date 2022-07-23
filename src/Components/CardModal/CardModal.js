import React from 'react';
//Styles
import styles from './CardModal.module.scss';
//Images
import iconPhone from '../../Assets/icon-phone.svg';
import iconAddress from '../../Assets/icon-address.svg';

const CardModal = ({ data, loading, setModalCard }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalCard(null);
    }
  }

  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )}
      {!loading && data && (
        <div
          className={styles.containerGeralModal}
          onClick={handleOutsideClick}
        >
          <div className={styles.containerModal}>
            <div className={styles.nameAddress}>
              <h1>{data.name}</h1>
              <h2>{data.address}</h2>
            </div>
            <div className={styles.phoneEmail}>
              <div className={styles.phone}>
                <img src={iconPhone} alt="Icon Phone" />
                <a href={'tel:' + data.phone}>{data.phone}</a>
              </div>
              <div className={styles.address}>
                <img src={iconAddress} alt="Icon Address" />
                <a href={'email:' + data.email}>{data.email}</a>
              </div>
            </div>
            <div className={styles.cardPhoto}>
              <img src={data.image} alt={data.name} />
            </div>
            <div className={styles.aboutCard}>
              <p>{data.about}</p>
            </div>
            <div className={styles.priceButton}>
              <span>Price: ${data.price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardModal;
