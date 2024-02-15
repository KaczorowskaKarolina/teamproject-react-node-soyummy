import { ReactComponent as LogoIcon } from 'client/images/icons/logo-icon.svg';
import css from './Logo.module.css';

const Logo = () => {
  return <LogoIcon className={css.LogoIcon} />;
};

export { Logo }