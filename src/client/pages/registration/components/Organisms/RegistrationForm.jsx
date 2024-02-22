import { RectangleButton } from '#atoms/RectangleButton/RectangleButton.jsx';
import { RegistrationInputs } from '#pages/registration/components/Molecules/RegistrationInputs.jsx';
import { RegistrationLink } from '#pages/registration/components/Atoms/RegistrationLink.jsx';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={css.RegistrationForm}>
      <div className={css.RegistrationModal}>
        <h2 className={css.RegistrationTitle}>Registration</h2>
        <RegistrationInputs />
        <div className={css.RegistrationButton}>
          <RectangleButton title="Sign Up" size="large" />
        </div>
      </div>
      <RegistrationLink />
    </div>
  );
};

export { RegistrationForm };
