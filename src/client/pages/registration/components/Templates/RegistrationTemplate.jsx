import PageImage from '#images/pages/RegisterAndSignInPages/register-signin-image.png';
import { RegistrationForm } from '#pages/registration/components/Organisms/RegistrationForm.jsx';
import css from './RegistrationTemplate.module.css';

const RegistrationTemplate = () => {
  return (
    <div className={css.RegistrationTemplate}>
      <img
        src={PageImage}
        alt="A person using the So Yummy App."
        className={css.RegistrationImage}
      />
      <RegistrationForm />
      <div className={css.trapezoid}></div>
    </div>
  );
};

export { RegistrationTemplate };
