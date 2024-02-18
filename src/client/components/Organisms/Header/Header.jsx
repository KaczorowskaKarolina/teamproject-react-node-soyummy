import { Logo } from 'client/components/Atoms/Logo/Logo.jsx';
import css from './Header.module.css';
import { BurgerMenu } from 'client/components/Atoms/BurgerMenu/BurgerMenu.jsx';

const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.rightContainer}>
        <div className={css.userMenu}>
          <div className={css.avatar}></div>
          <p className={css.name}>Name</p>
        </div>
        <div className={css.burgerIcon}>
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export { Header };
