//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
import Filter from '../Filter/Filter';
//Images
import logo from '../../Assets/logo-instaviagem.png';
import iconHeart from '../../Assets/icon-heart.svg';
//React Router Dom
import { Link } from 'react-router-dom';

const Header = () => {
  const global = React.useContext(GlobalContext);
  return (
    <header className={styles.header}>
      <div className={styles.containerGeral}>
        <div className={styles.logoFavorito}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Logo Instaviagem" />
          </Link>
          <Link to="/favorites" className={styles.favorito}>
            <img src={iconHeart} alt="Icon Heart" />
          </Link>
        </div>
        <Filter />
      </div>
    </header>
  );
};

export default Header;
