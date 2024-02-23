import { RectangleButton } from '#components/Atoms/RectangleButton/RectangleButton.jsx';

import { ReactComponent as CloseButton } from '#images/icons/close-icon.svg';

import css from './LogOutModal.module.css';
import { variables } from 'client/styles/_vars.css';

const LogOutModal = () => {
  return (
    <div>
      <CloseButton className={css.LogOutCloseButton} />
      <div className={css.LogOutModal}>
        <p className={css.LogOutText}>Are you sure you want to log out?</p>
        <div className={css.LogOutFormButtons}>
          <div className={css.LogOutFormButton}>
            <RectangleButton title="Log out" size="small" />
          </div>
          <div className={css.LogOutFormButton}>
            <RectangleButton
              title="Cancel"
              size="small"
              colorScheme="darkMode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogOutModal };
