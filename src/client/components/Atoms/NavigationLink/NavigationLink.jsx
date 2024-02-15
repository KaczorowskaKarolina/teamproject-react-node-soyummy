import { NavLink } from 'react-router-dom';

export const NavigationLink = ({ path, title }) => {
  return <NavLink to={path}>{title}</NavLink>;
};
