//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
import Cart from '../Cart/Cart';
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import Search from '../Search/Search';
import Account from '../Account/Account';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
//Images
import logo from '../../Assets/logo.svg';
import iconCel from '../../Assets/icone-cel.svg';
import iconCelCinza from '../../Assets/icone-cel-cinza.svg';

const Header = () => {
  const global = React.useContext(GlobalContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerMobile}>
        <div className={styles.elementsMobile}>
          <MenuHamburguer />
          <img
            src={logo}
            alt="Logo Auaha"
            className={`${styles.logo} ${
              global.active ? `${styles.active}` : ''
            }`}
          />
          <Cart />
        </div>
        <Search />
      </div>

      <div className={styles.headerDesktop}>
        <div className={`${styles.container} ${styles.containerDesktop}`}>
          <Search />
          <img
            src={logo}
            alt="Logo Auaha"
            className={`${styles.logo} ${
              global.active ? `${styles.active}` : ''
            }`}
          />
          <div className={styles.containerItemsMenu}>
            <Account />
            <div className={styles.containerNumber}>
              <img src={iconCel} alt="Icon Cel" className={styles.iconCel} />
              <img
                src={iconCelCinza}
                alt="Icon Cel"
                className={styles.iconCelCinza}
              />
              <p>(99) 99999-9999</p>
            </div>
            <Cart />
          </div>
        </div>
        <MenuDesktop />
      </div>
    </header>
  );
};

export default Header;
