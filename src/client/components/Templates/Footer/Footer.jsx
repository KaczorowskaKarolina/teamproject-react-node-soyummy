import { FooterInfo } from '#organisms/FooterInfo/FooterInfo.jsx';
import { FooterLinks } from '#molecules/FooterLinks/FooterLinks.jsx';
import { Newsletter } from '#organisms/Newsletter/Newsletter.jsx';
import { FooterIcons } from '#molecules/FooterIcons/FooterIcons.jsx';
import { RightsAndTerms } from '#molecules/RightsAndTerms/RightsAndTerms.jsx';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.Footer}>
      <div className={css.FooterMain}>
        <div className={css.FooterContent}>
          <FooterInfo />
          <FooterLinks />
          <Newsletter />
        </div>
        <FooterIcons />
      </div>
      <RightsAndTerms />
    </div>
  );
};

export { Footer };
