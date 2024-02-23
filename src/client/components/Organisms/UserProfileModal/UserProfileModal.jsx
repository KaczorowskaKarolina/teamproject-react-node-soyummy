import { ProfilePhotoEdit } from '#components/Molecules/ProfilePhotoEdit/ProfilePhotoEdit.jsx';
import { FormInput } from '#components/Atoms/FormInput/FormInput.jsx';
import { RectangleButton } from '#components/Atoms/RectangleButton/RectangleButton.jsx';

import { ReactComponent as CloseButton } from '#images/icons/close-icon.svg';

import css from './UserProfileModal.module.css';

const UserProfileModal = ({ userName, photoUrl, darkOrLight }) => {
  return (
    <div>
      <CloseButton className={css.UserProfileCloseButton} />
      <div className={css.UserProfileModal}>
        <ProfilePhotoEdit userName={userName} photoUrl={photoUrl} />
        <div className={css.UserProfileForm}>
          <div className={css.UserProfileFormComponent}>
            <FormInput
              type="text"
              inputName="userNameEdit"
              placeholder={userName}
              editIcon
              darkOrLight={darkOrLight}
            />
          </div>
          <div className={css.UserProfileFormButton}>
            <RectangleButton title="Save changes" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfileModal };
