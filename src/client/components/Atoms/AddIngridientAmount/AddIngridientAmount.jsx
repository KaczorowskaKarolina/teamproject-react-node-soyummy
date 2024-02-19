import styles from './AddIngridientAmount.module.css';
import { ReactComponent as Icon } from './iconAddIngridientAmount.svg';

const AddIngridientAmount = () => {
  return (
    <label htmlFor="ingdridientAmount" className={styles.AddIngridientAmount}>
      <input
        name="amount"
        id="ingdridientAmount"
        className={styles.input}
        type="text"
        list="amountTypes"
      />
      <datalist id="amountTypes">
        <option value="tbs">tbs</option>
        <option value="ts">ts</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="ml">ml</option>
      </datalist>
      {/* <svg className={styles.icon} width="18" height="18"> */}
      <Icon className={styles.icon} />
      {/* </svg> */}
    </label>
  );
};

export { AddIngridientAmount };
