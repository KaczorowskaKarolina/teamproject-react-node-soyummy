import css from './Navbar.module.css';
import { NavigationLink } from 'client/components/Atoms/NavigationLink/NavigationLink';

const Navbar = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavigationLink path="/categories/:categoryName" title="Categories" />
        </li>
        <li className={css.item}>
          <NavigationLink path="/add" title="Add recipes" />
        </li>
        <li className={css.item}>
          <NavigationLink path="/my" title="My recipes" />
        </li>
        <li className={css.item}>
          <NavigationLink path="/favorite" title="Favorite" />
        </li>
        <li className={css.item}>
          <NavigationLink path="/shopping-list" title="Shopping list" />
        </li>
        <li className={css.item}>
          <NavigationLink path="/search" title="Search" icon="true" />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
