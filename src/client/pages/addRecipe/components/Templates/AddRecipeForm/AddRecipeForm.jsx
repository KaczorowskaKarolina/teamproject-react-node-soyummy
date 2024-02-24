import { AddRecipeImage } from '../../Atoms/AddRecipeImage/AddRecipeImage.jsx';
import { AddRecipeInfo } from '../../Organisms/AddRecipeInfo/AddRecipeInfo.jsx';
import { AddIngredients } from '../AddIngredients/AddIngredients.jsx';
import { CurvedButton } from 'client/components/Atoms/CurvedButton/CurvedButton.jsx';
import { AddPreparation } from '../../Molecules/AddPreparation/AddPreparation.jsx';

import styles from './AddRecipeForm.module.css';

const AddRecipeForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const {
      recipeImage,
      recipeName,
      recipeAbout,
      recipeCategory,
      recipeTime,
      recipePreparation,
    } = form;
    console.log(
      recipeName.value,
      recipeAbout.value,
      recipeCategory.value,
      recipeTime.value,
      recipePreparation.value
    );
  };
  return (
    <form className={styles.AddRecipeForm} onSubmit={handleSubmit}>
      <div className={styles.ImageAndInfo}>
        <div className={styles.Image}>
          <AddRecipeImage />
        </div>
        <div className={styles.ImageAndInfo}>
          <AddRecipeInfo />
        </div>
      </div>
      <AddIngredients />
      <AddPreparation />
      <div className={styles.AddRecipeButton}>
        <CurvedButton
          greenOrBlack={'black'}
          type="submit"
          title={'Add recipe'}
        />
      </div>
    </form>
  );
};

export { AddRecipeForm };
