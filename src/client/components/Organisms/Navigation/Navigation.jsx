import { Link } from 'react-router-dom';
import { Navbar } from '#molecules/Navbar/Navbar.jsx';
import { ReactComponent as CloseIcon } from '#icons/close-icon.svg';
import { ReactComponent as LogoIcon } from '#icons/logo-header-icon.svg';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.container}>
      <div className={css.icons}>
        <Link to="/" className={css.logo}>
          <LogoIcon />
        </Link>
        <button onClick={() => {}} className={css.closeButton}>
          <CloseIcon />
        </button>
      </div>
      <Navbar />
      <div className={css.switch}>switch</div>
    </div>
  );
};

export { Navigation };
