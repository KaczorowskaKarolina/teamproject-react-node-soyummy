import { FooterIcon } from '#atoms/FooterIcon/FooterIcon.jsx';
import css from './FooterIcons.module.css';

const FooterIcons = () => {
  return (
    <div className={css.FooterIcons}>
      <FooterIcon socialMedia="facebook" />
      <FooterIcon socialMedia="youtube" />
      <FooterIcon socialMedia="twitter" />
      <FooterIcon socialMedia="instagram" />
    </div>
  );
};

export { FooterIcons };
