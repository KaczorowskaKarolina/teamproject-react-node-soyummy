import { ReactComponent as BurgerIcon } from 'client/images/icons/menu-03.svg';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <button
      onClick={() => {
        // return <Navigation />
      }}
      className={css.burgerIcon}
    >
      <BurgerIcon />
    </button>
  );
};

export { BurgerMenu };
