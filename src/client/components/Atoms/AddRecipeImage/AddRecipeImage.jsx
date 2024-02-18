import styles from './AddRecipeImage.module.css';
import { ReactComponent as Icon } from './iconAddRecipeImage.svg';

const AddRecipeImage = () => {
  return (
    <div className={styles.iconContainer}>
      <svg className={styles.icon} width="64" height="64">
        <Icon />
      </svg>
    </div>
  );
};

export { AddRecipeImage };
