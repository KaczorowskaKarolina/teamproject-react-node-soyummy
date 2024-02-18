import { FormInput } from 'client/components/Atoms/FormInput/FormInput.jsx';
import css from './RegistrationInputs.module.css';

const RegistrationInputs = () => {
  return (
    <div className={css.RegistrationInputs}>
      <FormInput type="name" inputName="name" placeholder="Name" darkOrLight="dark"/>
      <FormInput type="email" inputName="email" placeholder="Email" darkOrLight="dark"/>
      <FormInput type="password" inputName="password" placeholder="Password" darkOrLight="dark"/>
    </div>
  );
};

export { RegistrationInputs };
