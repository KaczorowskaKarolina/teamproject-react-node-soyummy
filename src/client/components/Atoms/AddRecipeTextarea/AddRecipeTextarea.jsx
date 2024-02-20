import styles from './AddRecipeTextarea.module.css';

const AddRecipeTextarea = () => {
  return (
    <textarea
      name="recipeDescription"
      className={styles.AddRecipeDescriptionInput}
      placeholder="Enter recipe"
      type="textarea"
    ></textarea>
  );
};

export { AddRecipeTextarea };
