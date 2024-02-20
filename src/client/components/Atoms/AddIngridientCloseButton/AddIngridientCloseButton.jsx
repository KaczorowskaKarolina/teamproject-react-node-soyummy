import styles from './AddIngridientCloseButton.module.css';
import { ReactComponent as Icon } from './iconCloseButton.svg';

const AddIngridientCloseButton = () => {
  return (
    <button
      type="button"
      className={styles.AddRecipeCloseButton}
      onClick={() => {
        console.log('Test');
      }}
    >
      X{/* <Icon className={styles.icon} /> */}
    </button>
  );
};

export { AddIngridientCloseButton };
