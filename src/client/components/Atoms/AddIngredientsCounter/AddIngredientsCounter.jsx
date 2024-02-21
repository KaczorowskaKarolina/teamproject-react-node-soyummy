import styles from './AddIngredientsCounter.module.css';
import { ReactComponent as IconMinus } from './iconMinus.svg';
import { ReactComponent as IconPlus } from './iconPlus.svg';

const AddIngredientsCounter = ({ plusCb, minusCb, counter }) => {
  return (
    <div className={styles.AddIngredientsCounter}>
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

export { AddIngredientsCounter };
