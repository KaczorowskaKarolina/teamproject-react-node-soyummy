import { Link } from 'react-router-dom';

export const NavigationLink = ({ path, title }) => {
  return <Link to={path}>{title}</Link>;
};
