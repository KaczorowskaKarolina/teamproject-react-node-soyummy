import { Logo } from 'client/components/Atoms/Logo/Logo.jsx';
import css from './Header.module.css';
import { BurgerMenu } from 'client/components/Atoms/BurgerMenu/BurgerMenu.jsx';

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <Logo />
        {/* <Navigation /> */}
        <div className={css.rightContainer}>
          <div className={css.userMenu}>
            <div className={css.avatar}></div>
            <p className={css.name}>Name</p>
          </div>
          <BurgerMenu />
          <div className={css.switch}>switch</div>
        </div>
      </div>
    </div>
  );
};

export { Header };
