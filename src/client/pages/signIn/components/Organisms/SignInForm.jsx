import { RectangleButton } from '#components/Atoms/RectangleButton/RectangleButton.jsx';
import { SignInInputs } from '#pages/signIn/components/Molecules/SignInInputs.jsx';
import { SignInLink } from '#pages/signIn/components/Atoms/SignInLink.jsx';
import css from './SignInForm.module.css';

const SignInForm = () => {
  return (
    <div className={css.SignInForm}>
      <div className={css.SignInModal}>
        <h2 className={css.SignInTitle}>Sign In</h2>
        <SignInInputs />
        <RectangleButton title="Sign In" size="large" />
      </div>
      <SignInLink />
    </div>
  );
};

export { SignInForm };
