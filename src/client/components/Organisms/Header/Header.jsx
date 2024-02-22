import { Logo } from 'client/components/Atoms/Logo/Logo.jsx';
import css from './Header.module.css';
import { BurgerMenu } from 'client/components/Atoms/BurgerMenu/BurgerMenu.jsx';
import { Navbar } from 'client/components/Molecules/Navbar/Navbar';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';

const Header = () => {
  let width = window.innerWidth;

  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <Logo />
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
