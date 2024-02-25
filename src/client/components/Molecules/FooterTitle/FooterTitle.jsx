import { ReactComponent as FooterLogo } from '#icons/footer-logo-icon.svg';
import css from './FooterTitle.module.css';

const FooterTitle = () => {
  return (
    <div className={css.FooterTitle}>
      <div className={css.FooterLogo}>
        <FooterLogo />
      </div>
      <h2 className={css.FooterTitleText}>So Yummy</h2>
    </div>
  );
};

export { FooterTitle };
