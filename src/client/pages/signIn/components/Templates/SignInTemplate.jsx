import PageImage from '#images/pages/registerSigninPage/register-signin-image.png';
import { SignInForm } from '#pages/signIn/components/Organisms/SignInForm.jsx';
import css from './SignInTemplate.module.css';

const SignInTemplate = () => {
  return (
    <div className={css.SignInTemplate}>
      <img
        src={PageImage}
        alt="A person using the So Yummy App."
        className={css.SignInImage}
      />
      <SignInForm />
      <div className={css.trapezoid}></div>
    </div>
  );
};

export { SignInTemplate };
