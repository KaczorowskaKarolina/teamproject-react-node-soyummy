import styles from './AddIngridientsCounter.module.css';
import { ReactComponent as IconMinus } from './iconMinus.svg';
import { ReactComponent as IconPlus } from './iconPlus.svg';

const AddIngridientsCounter = ({ plusCb, minusCb, counter }) => {
  return (
    <div className={styles.AddIngridientsCounter}>
      <button type="button" onClick={minusCb}>
        <div className={styles.minusIcon}>
          <IconMinus />
        </div>
      </button>
      {counter}
      <button type="button" onClick={plusCb}>
        <div className={styles.plusIcon}>
          <IconPlus />
        </div>
      </button>
    </div>
  );
};

export { AddIngridientsCounter };
