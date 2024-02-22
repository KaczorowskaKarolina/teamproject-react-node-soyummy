import css from './DeleteButton.module.css';
import { ReactComponent as TrashIcon } from 'client/images/icons/trash-icon.svg';

const DeleteButton = () => {
  return (
    <button className={css.DeleteButton}>
      <div className={css.IconBox}>
        <TrashIcon />
      </div>
    </button>
  );
};

export { DeleteButton };