import { Link } from 'react-router-dom';
import { Navbar } from 'client/components/Molecules/Navbar/Navbar';
import { ReactComponent as CloseIcon } from '../../../images/icons/close-icon.svg';
import { ReactComponent as LogoIcon } from '../../../images/icons/logo-header-icon.svg';
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
