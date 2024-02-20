import css from './RegistrationLink.module.css';

const RegistrationLink = () => {
  return (
    <a href="./signin" className={css.RegistrationLink}>
      Sign in
    </a>
  );
};

export { RegistrationLink };
