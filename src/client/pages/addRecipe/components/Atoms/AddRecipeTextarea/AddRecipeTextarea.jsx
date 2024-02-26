import styles from './AddRecipeTextarea.module.css';

const AddRecipeTextarea = () => {
  return (
    <div className={styles.AddRecipeDescriptionTextarea}>
      <textarea
        id="recipePreparation"
        className={styles.AddRecipeDescriptionInput}
        placeholder="Enter recipe"
        type="textarea"
      ></textarea>
    </div>
  );
};

export { AddRecipeTextarea };
