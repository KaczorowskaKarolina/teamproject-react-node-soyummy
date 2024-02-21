import styles from './AddIngredientCloseButton.module.css';
import { ReactComponent as Icon } from './iconCloseButton.svg';

const AddIngredientCloseButton = () => {
  return (
    <button
      type="button"
      className={styles.AddRecipeCloseButton}
      onClick={() => {
        console.log('Test');
      }}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
    </button>
  );
};

export { AddIngredientCloseButton };
