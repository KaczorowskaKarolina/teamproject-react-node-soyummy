import { ReactComponent as NameIcon } from '#images/icons/name-icon.svg';
import { ReactComponent as EmailIcon } from '#images/icons/email-icon.svg';
import { ReactComponent as PasswordIcon } from '#images/icons/password-icon.svg';
import { ReactComponent as EditIcon } from '#images/icons/edit-icon.svg';

import { variables } from 'client/styles/_vars.css';
import css from './FormInput.module.css';



const FormInput = ({ type, inputName, placeholder, editIcon, darkOrLight = "dark" }) => {
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
      <div>
        {icon}
      </div>
      <input
        type={type}
        name={inputName}
        placeholder={placeholder}
        // onChange={handleChange}
        required
        className={textStyles}
      />
      <div>
        {editIcon && <EditIcon className={iconStyles}/>}
      </div>
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