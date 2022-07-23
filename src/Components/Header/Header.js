//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Context
// import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
//Images
import logo from '../../Assets/logo-instaviagem.png';
import iconHeart from '../../Assets/icon-heart.svg';
//React Router Dom
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerGeral}>
        <div className={styles.logoFavorito}>
          <Link
            to="/"
            className={styles.logo}
            onClick={() => {
              document.reload(true);
            }}
          >
            <img src={logo} alt="Logo Instaviagem" />
          </Link>
          <Link to="/favorites" className={styles.favorito}>
            <img src={iconHeart} alt="Icon Heart" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
