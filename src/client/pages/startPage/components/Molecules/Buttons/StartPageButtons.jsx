import { CurvedButton } from 'client/components/Atoms/CurvedButton/CurvedButton.jsx';
import css from './StartPageButtons.module.css';

const StartPageButtons = () => {
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
        greenOrBlack="green"
        onClick={handleRegistration}
      />
      <CurvedButton title="Login" onClick={handleLogin} />
    </div>
  );
};

export { StartPageButtons };
