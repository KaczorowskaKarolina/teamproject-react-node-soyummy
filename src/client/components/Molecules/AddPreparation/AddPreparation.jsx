import styles from './AddPreparation.module.css';
import { AddRecipeHeaders } from 'client/components/Atoms/AddRecipeHeader/AddRecipeHeader';
import { AddRecipeTextarea } from 'client/components/Atoms/AddRecipeTextarea/AddRecipeTextarea';

const AddPreparation = () => {
  return (
    <div className={styles.AddPreparation}>
      <AddRecipeHeaders>Recipe preparation</AddRecipeHeaders>
      <AddRecipeTextarea />
    </div>
  );
};

export { AddPreparation };
