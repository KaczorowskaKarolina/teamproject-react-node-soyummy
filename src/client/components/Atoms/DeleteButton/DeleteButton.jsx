import css from './DeleteButton.module.css';
import { ReactComponent as TrashIcon } from '#icons/trash-icon.svg';

const DeleteButton = ({ recipesOrFavorites }) => {
  const ButtonClasses = `${css.DeleteButton} ${css[`${recipesOrFavorites}`]}`;
  const IconClasses = `${css.IconBox} ${css[`${recipesOrFavorites}`]}`;

  return (
    <button className={ButtonClasses}>
      <div className={IconClasses}>
        <TrashIcon />
      </div>
    </button>
  );
};

export { DeleteButton };
