import styles from './AddRecipeImage.module.css';
import { ReactComponent as Icon } from './iconAddRecipeImage.svg';

const AddRecipeImage = () => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.icon}>
        <Icon />
      </div>
    </div>
  );
};

export { AddRecipeImage };
