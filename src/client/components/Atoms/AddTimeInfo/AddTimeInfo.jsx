import styles from './AddTimeInfo.module.css';

const AddTimeInfo = () => {
  return (
    <label htmlFor="time" className={styles.AddTimeInfo}>
      Cooking time
      <div>
        <input
          name="recipeTime"
          id="time"
          className={styles.input}
          type="text"
        />
        <select name="recipeTimeUnit" className={styles.select}>
          <option value="tbs">sec</option>
          <option value="ts">min</option>
          <option value="kg">hr</option>
          <option value="g">days</option>
        </select>
      </div>
    </label>
  );
};

export { AddTimeInfo };
