import { ReactComponent as NameIcon } from 'client/images/icons/name-icon.svg';
import { ReactComponent as EmailIcon } from 'client/images/icons/email-icon.svg';
import { ReactComponent as PasswordIcon } from 'client/images/icons/password-icon.svg';
import { ReactComponent as EditIcon } from 'client/images/icons/edit-icon.svg';
import css from './FormInput.module.css';

const FormInput = ({ type, inputName, placeholder, editIcon, darkOrLight }) => {
  const iconStyles = `${css.FormIcon} ${css[`${darkOrLight}`]}`;
  const inputStyles = `${css.FormInput} ${css[`${darkOrLight}`]}`;
  const textStyles = `${css.FormInputText} ${css[`${darkOrLight}`]}`;

  //   handleChange = evt => {
  //   };

  let icon;
  switch (inputName) {
    case 'name':
      icon = <NameIcon className={iconStyles} />;
      break;
    case 'email':
      icon = <EmailIcon className={iconStyles} />;
      break;
    case 'password':
      icon = <PasswordIcon className={iconStyles} />;
      break;
    default:
      icon = <NameIcon className={iconStyles} />;
  }

  return (
    <div className={inputStyles}>
      {icon}
      <input
        type={type}
        name={inputName}
        placeholder={placeholder}
        // onChange={handleChange}
        required
        className={textStyles}
      />
      {editIcon && <EditIcon className={iconStyles} />}
    </div>
  );
};

export { FormInput };

// Props explanation:
// type = text/email/password --> used to determine the type of input data and displayed content,
// inputName = name/email/password --> used to display icon on the left,
// placeholder = "Visible text" --> label/placeholder shown in the input,
// editIcon --> true/false prop used to display edit icon on the right,
// darkOrLight = dark/light --> styles prop, to determine which color scheme use
