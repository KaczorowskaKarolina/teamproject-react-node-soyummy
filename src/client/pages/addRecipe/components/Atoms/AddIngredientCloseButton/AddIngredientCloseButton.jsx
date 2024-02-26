import { ReactComponent as Icon } from './iconCloseButton.svg';
import styles from './AddIngredientCloseButton.module.css';

const AddIngredientCloseButton = ({ id, onClick }) => {
  return (
    <button
      type="button"
      className={styles.AddRecipeCloseButton}
      onClick={onClick}
      data-counter={id}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
    </button>
  );
};

export { AddIngredientCloseButton };
