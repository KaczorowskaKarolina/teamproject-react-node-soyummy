import styles from './AddRecipeDescriptionInput.module.css';

const AddRecipeDescriptionInput = () => {
  return (
    <textarea
      name="recipeDescription"
      className={styles.AddRecipeDescriptionInput}
      placeholder="Enter recipe"
      type="textarea"
    ></textarea>
  );
};

export { AddRecipeDescriptionInput };
