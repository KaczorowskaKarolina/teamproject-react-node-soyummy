import css from './Navbar.module.css';
import { NavigationLink } from '#atoms/NavigationLink/NavigationLink.jsx';
import links from './links.json';

const Navbar = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {links.map((link, index) => (
          <li key={index} className={css.item}>
            <NavigationLink
              path={link.path}
              title={link.title}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
