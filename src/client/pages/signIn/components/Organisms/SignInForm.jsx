import { SignInInputs } from '../Molecules/SignInInputs.jsx';
import { RectangleButton } from 'client/components/Atoms/RectangleButton/RectangleButton.jsx';
import { SignInLink } from '../Atoms/SignInLink.jsx';
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
