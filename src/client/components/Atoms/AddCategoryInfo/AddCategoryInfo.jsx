import styles from './AddCategoryInfo.module.css';

const AddCategoryInfo = () => {
  return (
    <label className={styles.AddCategoryInfo}>
      Category
      <input
        list="categories"
        name="recipeCategory"
        id="ingdridientNames"
        className={styles.input}
      />
      <datalist id="categories">
        <option value="Breakfast"></option>
        <option value="Dinner"></option>
        <option value="Lunch"></option>
        <option value="Brunch"></option>
        <option value="Something"></option>
      </datalist>
    </label>
  );
};

export { AddCategoryInfo };
