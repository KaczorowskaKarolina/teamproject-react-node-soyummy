import { FooterInfo } from '#components/Organisms/FooterInfo/FooterInfo.jsx';
import { FooterLinks } from '#components/Molecules/FooterLinks/FooterLinks.jsx';
import { Newsletter } from '#components/Organisms/Newsletter/Newsletter.jsx';
import { FooterIcons } from '#components/Molecules/FooterIcons/FooterIcons.jsx';
import { RightsAndTerms } from '#components/Molecules/RightsAndTerms/RightsAndTerms.jsx';

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
