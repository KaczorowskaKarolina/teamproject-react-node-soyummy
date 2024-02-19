import styles from './AddRecipeInfoInput.module.css';

const AddRecipeInfoInput = () => {
  return (
    <label className={styles.AddRecipeInfoInput}>
      Enter item title
      <input className={styles.inputTitle} type="text" id="recipeTitle" />
    </label>
  );
};

export { AddRecipeInfoInput };
