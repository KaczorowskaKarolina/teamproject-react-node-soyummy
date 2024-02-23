import { ProfilePhoto } from '#components/Atoms/ProfilePhoto/ProfilePhoto.jsx';
import { ReactComponent as AddButton } from '#images/icons/add-icon.svg';

import css from './ProfilePhotoEdit.module.css';

const ProfilePhotoEdit = ({ userName, photoUrl }) => {
  return (
    <div className={css.ProfilePhotoEdit}>
      <div className={css.ProfilePhotoEditImage}>
        <ProfilePhoto userName={userName} photoUrl={photoUrl} />
      </div>
      <AddButton className={css.ProfilePhotoEditButton} />
    </div>
  );
};

export { ProfilePhotoEdit };
