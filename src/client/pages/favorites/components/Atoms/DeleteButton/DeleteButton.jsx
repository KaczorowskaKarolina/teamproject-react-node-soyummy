import css from './DeleteButton.module.css';
import { ReactComponent as TrashIcon } from '../../../../../images/icons/trash-icon.svg';

const DeleteButton = () => {
  return (
    <button className={css.deleteButton}>
      <div className={css.iconBox}>
        <TrashIcon />
      </div>
    </button>
  );
};

export { DeleteButton };
