import { PopularRecipeInfo } from '../../Atoms/PopularRecipeInfo/PopularRecipeInfo.jsx';

import styles from './PopularRecipeItem.module.css';

const PopularRecipeItem = () => {
  return (
    <div className={styles.PopularRecipeItem}>
      <div className={styles.imageTest}></div>
      <PopularRecipeInfo />
    </div>
  );
};

export { PopularRecipeItem };
