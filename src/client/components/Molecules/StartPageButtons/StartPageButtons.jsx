//import CurvedButton from '../Atoms/CurvedButton' (button import, check file path)

export const StartPageButtons = props => {
  const handleRegistration = () => {
    console.log('Registration button test');
  };

  const handleLogin = () => {
    console.log('Login button test');
  };

  return (
    <div>
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
