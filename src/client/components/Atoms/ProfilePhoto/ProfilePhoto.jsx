import { ReactComponent as PhotoPlaceholder } from '#icons/name-icon.svg';
import css from './ProfilePhoto.module.css';

const ProfilePhoto = ({ userName, photoUrl, Header }) => {
  if (photoUrl && Header) {
    return (
      <div className={css.HeaderPhoto}>
        <img src={photoUrl} alt={userName} />
      </div>
    );
  } else if (Header) {
    return (
      <div className={css.HeaderPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  } else if (photoUrl) {
    return (
      <div className={css.HeaderPhoto}>
        <img src={photoUrl} alt={userName} />
      </div>
    );
  } else {
    return (
      <div className={css.HeaderPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  }
};

export { ProfilePhoto };
