import { Logo } from 'client/components/Atoms/Logo/Logo.jsx';
import css from './Header.module.css';
import { BurgerMenu } from 'client/components/Atoms/BurgerMenu/BurgerMenu.jsx';

const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export { Header };
