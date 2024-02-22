import { FooterLink } from '#components/Atoms/FooterLink/FooterLink.jsx';
import css from './FooterLinks.module.css';

const FooterLinks = () => {
  return (
    <div className={css.FooterLinks}>
      <FooterLink title="Ingredients" link="*" />
      <FooterLink title="Add recipes" link="add" />
      <FooterLink title="My recipes" link="my" />
      <FooterLink title="Favorites" link="favorite" />
      <FooterLink title="Shopping list" link="shopping-list" />
    </div>
  );
};

export { FooterLinks };
