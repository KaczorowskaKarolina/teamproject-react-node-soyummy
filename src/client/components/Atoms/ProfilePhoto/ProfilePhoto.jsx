import { ReactComponent as PhotoPlaceholder } from '#images/icons/name-icon.svg';

import { variables } from 'client/styles/_vars.css';
import css from './ProfilePhoto.module.css';

const ProfilePhoto = ({ userName, photoUrl, Header }) => {
  if (photoUrl && Header) {
    return (
      <img
        src={photoUrl}
        alt={`${userName} profile photo`}
        className={css.HeaderPhoto}
      />
    );
  } else if (Header) {
    return (
      <div className={css.HeaderPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  } else if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={`${userName} profile photo`}
        className={css.ProfilePhoto}
      />
    );
  } else {
    return (
      <div className={css.PhotoPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  }
};

export { ProfilePhoto };
