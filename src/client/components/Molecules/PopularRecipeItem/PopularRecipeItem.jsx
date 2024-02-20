import styles from './PopularRecipeItem.module.css';
import { PopularRecipeInfo } from '../../Atoms/PopularRecipeInfo/PopularRecipeInfo';

const PopularRecipeItem = () => {
  return (
    <div className={styles.PopularRecipeItem}>
      <div className={styles.imageTest}></div>
      <PopularRecipeInfo />
    </div>
  );
};

export { PopularRecipeItem };
