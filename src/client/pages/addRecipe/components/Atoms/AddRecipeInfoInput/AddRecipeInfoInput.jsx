import styles from './AddRecipeInfoInput.module.css';

const AddRecipeInfoInput = ({ placeholder, idName }) => {
  return (
    <label className={styles.AddRecipeInfoInput}>
      <input
        className={styles.inputTitle}
        type="text"
        id={idName}
        placeholder={placeholder}
      />
    </label>
  );
};

export { AddRecipeInfoInput };
