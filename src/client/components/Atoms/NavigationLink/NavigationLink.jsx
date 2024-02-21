import css from './NavigationLink.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '#icons/search-icon.svg';

const NavigationLink = ({ path, title, icon }) => {
  if (icon) {
    return (
      <NavLink className={css.link} to={path}>
        <div className={css.icon}>
          <SearchIcon />
        </div>
        <p className={css.title}>{title}</p>
      </NavLink>
    );
  }

  return (
    <NavLink className={css.link} to={path}>
      {title}
    </NavLink>
  );
};

export { NavigationLink };