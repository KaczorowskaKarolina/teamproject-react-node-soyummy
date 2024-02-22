// import { Logo } from 'client/components/Atoms/Logo/Logo';
import css from './FooterTitle.module.css';

const FooterTitle = () => {
  return (
    <div className={css.FooterTitle}>
      <div className={css.FooterLogo}>
        {/* <Logo /> */}
      </div>
      <h2 className={css.FooterTitleText}>So Yummy</h2>
    </div>
  );
};

export { FooterTitle };
