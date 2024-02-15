import { NavigationLink } from 'client/components/Atoms/NavigationLink/NavigationLink';

export const Navbar = () => {
  return (
    <nav>
      <NavigationLink path="/categories/:categoryName" title="Categories" />
      <NavigationLink path="/add" title="Add recipes" />
      <NavigationLink path="/my" title="My recipes" />
      <NavigationLink path="/favorite" title="Favorite" />
      <NavigationLink path="/shopping-list" title="Shopping list" />
      <NavigationLink path="/search" title="Search" />
    </nav>
  );
};
