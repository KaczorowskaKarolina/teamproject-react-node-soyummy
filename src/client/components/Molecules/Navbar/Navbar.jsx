import css from './Navbar.module.css';
import { NavigationLink } from '#atoms/NavigationLink/NavigationLink.jsx';

const Navbar = () => {
  const links = [
    {
      path: '/categories/:categoryName',
      title: 'Categories',
      icon: false,
    },
    {
      path: '/add',
      title: 'Add recipes',
      icon: false,
    },
    {
      path: '/my',
      title: 'My recipes',
      icon: false,
    },
    {
      path: '/favorite',
      title: 'Favorite',
      icon: false,
    },
    {
      path: '/shopping-list',
      title: 'Shopping list',
      icon: false,
    },
    {
      path: '/search',
      title: 'Search',
      icon: true,
    },
  ];

  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {links.map(link => (
          <li className={css.item}>
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
