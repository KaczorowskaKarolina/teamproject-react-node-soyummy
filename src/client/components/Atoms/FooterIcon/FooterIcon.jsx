import { ReactComponent as FacebookIcon } from '#images/icons/facebook.svg';
import { ReactComponent as YoutubeIcon } from '#images/icons/youtube.svg';
import { ReactComponent as TwitterIcon } from '#images/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '#images/icons/instagram.svg';

import css from './FooterIcon.module.css';

const FooterIcon = ({ socialMedia, color = 'green' }) => {
  const classes = `${css.FooterIcon} ${css[color]}`;

  const socialMediaIcons = {
    facebook: FacebookIcon,
    youtube: YoutubeIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
  };

  const IconComponent = socialMediaIcons[socialMedia.toLowerCase()];

  return (
    <a href={`https://${socialMedia}.com`} className={css.FooterLink}>
      <IconComponent className={classes} />
    </a>
  );
};

export { FooterIcon };


// Props explanation

// socialMedia = facebook/youtube/twitter/instagram --> changes icon type
// color = green/white --> changes icon colors
