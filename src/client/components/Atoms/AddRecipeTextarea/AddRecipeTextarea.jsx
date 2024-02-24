import styles from './AddRecipeTextarea.module.css';

const AddRecipeTextarea = () => {
  return (
    <textarea
      id="recipePreparation"
      className={styles.AddRecipeDescriptionInput}
      placeholder="Enter recipe"
      type="textarea"
    ></textarea>
  );
};

export { AddRecipeTextarea };
