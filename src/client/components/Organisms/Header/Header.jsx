import { ReactComponent as HeaderLogo } from '#icons/logo-header-icon.svg';
import css from './Header.module.css';
import { BurgerMenu } from '#atoms/BurgerMenu/BurgerMenu.jsx';
import { Navbar } from '#molecules/Navbar/Navbar';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  let width = window.innerWidth;

  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <Link to="/" className={css.logo}>
            <HeaderLogo />
          </Link>
          {width < 1240 ? null : <Navbar />}
          <div className={css.rightContainer}>
            <div className={css.userMenu}>
              <div className={css.avatar}></div>
              <p className={css.name}>Name</p>
            </div>
            <BurgerMenu openMenu={setMenuState} />
            <div className={css.switch}>switch</div>
          </div>
        </div>
      </div>
      {menuState ? <Navigation closeMenu={setMenuState} /> : null}
    </>
  );
};

export { Header };
