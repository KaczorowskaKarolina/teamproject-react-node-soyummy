import styles from './AddIngridientUnit.module.css';
import { ReactComponent as Icon } from './iconAddIngridientUnit.svg';

const AddIngridientUnit = () => {
  return (
    <label htmlFor="ingdridientAmount" className={styles.AddIngridientUnit}>
      <input
        name="amount"
        id="ingdridientAmount"
        className={styles.input}
        type="text"
      />
      <select
        id="ingdridientAmount"
        name="amountUnit"
        className={styles.select}
      >
        <option value="tbs">tbs</option>
        <option value="ts">ts</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="ml">ml</option>
      </select>
      {/* <div className={styles.icon}><Icon /></div> */}
    </label>
  );
};

export { AddIngridientUnit };
