import styles from './AddIngridientName.module.css';
import { ReactComponent as Icon } from './iconAddIngridientName.svg';

const AddIngridientName = () => {
  return (
    <label htmlFor="ingdridientNames" className={styles.AddIngridientName}>
      <input
        list="ingridients"
        name="ingdridientName"
        id="ingdridientNames"
        className={styles.input}
      />
      {/* <svg className={styles.icon} width="18" height="18"> */}
      <Icon className={styles.icon} />
      {/* </svg> */}
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
