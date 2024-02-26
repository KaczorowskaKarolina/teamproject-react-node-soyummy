import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddRecipeTextarea } from '../../Atoms/AddRecipeTextarea/AddRecipeTextarea.jsx';

import styles from './AddPreparation.module.css';

const AddPreparation = () => {
  return (
    <div className={styles.AddPreparation}>
      <AddRecipeHeaders>Recipe preparation</AddRecipeHeaders>
      <AddRecipeTextarea />
    </div>
  );
};

export { AddPreparation };
