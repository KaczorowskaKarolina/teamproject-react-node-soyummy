import styles from './AddIngredientName.module.css';

const AddIngredientName = () => {
  return (
    <label htmlFor="ingdredientNames" className={styles.AddIngredientName}>
      <input
        list="ingredients"
        name="ingdredientName"
        id="ingdredientNames"
        className={styles.input}
      />
      <datalist id="ingredients">
        <option value="Chicken"></option>
        <option value="Beef"></option>
        <option value="Avocado"></option>
        <option value="Bread"></option>
        <option value="Ham"></option>
      </datalist>
    </label>
  );
};

export { AddIngredientName };
