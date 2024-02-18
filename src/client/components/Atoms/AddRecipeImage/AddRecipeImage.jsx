import styles from './AddRecipeImage.module.css';
import Icons from './icons.svg';

const AddRecipeImage = () => {
  return (
    <div className={styles.iconContainer}>
      <svg className={styles.icon} width="64px" height="64px">
        <use href={`${Icons}#icon-addRecipeImage`}></use>
      </svg>
    </div>
  );
};

export { AddRecipeImage };
