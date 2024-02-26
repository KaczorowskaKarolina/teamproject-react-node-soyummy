import { ReactComponent as IconMinus } from './iconMinus.svg';
import { ReactComponent as IconPlus } from './iconPlus.svg';

import styles from './AddIngredientsCounter.module.css';

const AddIngredientsCounter = ({ plusCb, minusCb, counter }) => {
  return (
    <div className={styles.AddIngredientsCounter}>
      <button type="button" onClick={minusCb} className={styles.button}>
        <div className={styles.minusIcon}>
          <IconMinus />
        </div>
      </button>
      {counter}
      <button type="button" onClick={plusCb} className={styles.button}>
        <div className={styles.plusIcon}>
          <IconPlus />
        </div>
      </button>
    </div>
  );
};

export { AddIngredientsCounter }
