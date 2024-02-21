import styles from './AddIngredientUnit.module.css';

const AddIngredientUnit = () => {
  return (
    <label htmlFor="ingdredientAmount" className={styles.AddIngridientUnit}>
      <input
        name="amount"
        id="ingdredientAmount"
        className={styles.input}
        type="text"
      />
      <select id="amountUnit" name="amountUnit" className={styles.select}>
        <option value="tbs">tbs</option>
        <option value="ts">ts</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="ml">ml</option>
      </select>
    </label>
  );
};

export { AddIngredientUnit };
