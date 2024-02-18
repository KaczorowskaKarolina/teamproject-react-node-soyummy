import { FormInput } from 'client/components/Atoms/FormInput/FormInput.jsx';
import css from './SignInInputs.module.css';

const SignInInputs = () => {
  return (
    <div className={css.SignInInputs}>
      <FormInput type="email" inputName="email" placeholder="Email" darkOrLight="dark"/>
      <FormInput type="password" inputName="password" placeholder="Password" darkOrLight="dark"/>
    </div>
  );
};

export { SignInInputs };
