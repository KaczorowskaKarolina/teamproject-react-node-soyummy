import css from './NavigationLink.module.css';
import { NavLink } from 'react-router-dom';

export const NavigationLink = ({ path, title }) => {
  return (
    <NavLink className={css.link} to={path}>
      {title}
    </NavLink>
  );
};
