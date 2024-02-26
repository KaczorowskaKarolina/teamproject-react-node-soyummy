import { FooterIcons } from 'client/components/Molecules/FooterIcons/FooterIcons.jsx';
import css from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={css.SocialMedia}>
      <h3 className={css.SocialMediaTitle}>Follow us</h3>
      <FooterIcons />
    </div>
  );
};

export { SocialMedia };
