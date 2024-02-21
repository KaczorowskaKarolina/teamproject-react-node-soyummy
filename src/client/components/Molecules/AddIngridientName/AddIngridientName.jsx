import styles from './AddIngridientName.module.css';

const AddIngridientName = () => {
  return (
    <label htmlFor="ingdridientNames" className={styles.AddIngridientName}>
      <input
        list="ingridients"
        name="ingdridientName"
        id="ingdridientNames"
        className={styles.input}
      />
      <datalist id="ingridients">
        <option value="Chicken"></option>
        <option value="Beef"></option>
        <option value="Avocado"></option>
        <option value="Bread"></option>
        <option value="Ham"></option>
      </datalist>
    </label>
  );
};

export { AddIngridientName };
