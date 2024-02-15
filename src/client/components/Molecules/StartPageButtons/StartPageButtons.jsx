import { CurvedButton } from "client/components/Atoms/CurvedButton/CurvedButton";
import css from './StartPageButtons.module.css'

export const StartPageButtons = () => {
  const handleRegistration = () => {
    console.log('Registration button test');
  };

  const handleLogin = () => {
    console.log('Login button test');
  };

  return (
    <div className={css.StartPageButtons}>
      <CurvedButton
        title="Registration"
        type="button"
        greenOrBlack="green"
        onClick={handleRegistration}
      />
      <CurvedButton
        title="Login"
        type="button"
        onClick={handleLogin}
      />
    </div>
  );
};
