import { ReactComponent as BurgerIcon } from 'client/images/icons/menu-03.svg';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return <BurgerIcon className={css.burgerIcon} />;
};

export { BurgerMenu };
