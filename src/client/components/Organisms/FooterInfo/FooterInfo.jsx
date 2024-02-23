import { FooterTitle } from '#components/Molecules/FooterTitle/FooterTitle.jsx';
import css from './FooterInfo.module.css';

const FooterInfo = () => {
  return (
    <div className={css.FooterInfo}>
      <FooterTitle />
      <ul className={css.FooterInfoText}>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </ul>
    </div>
  );
};

export { FooterInfo };
