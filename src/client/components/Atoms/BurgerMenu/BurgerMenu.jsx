import { ReactComponent as BurgerIcon } from 'client/images/icons/menu-03.svg';
import css from './BurgerMenu.module.css';

const BurgerMenu = ({ openMenu }) => {
  return (
    <button
      onClick={() => {
        openMenu(true);
      }}
      className={css.burgerIcon}
    >
      <BurgerIcon />
    </button>
  );
};

export { BurgerMenu };
