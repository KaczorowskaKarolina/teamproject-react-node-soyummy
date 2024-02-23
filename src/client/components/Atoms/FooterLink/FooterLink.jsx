import { Link } from 'react-router-dom';
import css from './FooterLink.module.css';

const FooterLink = ({ title, link }) => {
  return (
    <Link to={`/${link}`} className={css.FooterLink}>
      <li>{title}</li>
    </Link>
  );
};

export { FooterLink };


// Props explanation

// title --> displayed text
// link --> changes link to the page

