import styles from './AddRecipeImage.module.css';

const AddRecipeImage = () => {
  return (
    <div className={styles.iconContainer}>
      <svg className={styles.icon} width="64px" height="64px">
        <use href="../../../images/icons/iconAddRecipeImage.svg#icon-addRecipeImage"></use>
      </svg>
    </div>
  );
};

export { AddRecipeImage };
