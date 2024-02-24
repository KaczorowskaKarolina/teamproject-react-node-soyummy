import { AddRecipeForm } from 'client/components/Organisms/AddRecipeForm/AddRecipeForm.jsx';
import styles from './AddRecipe.module.css';
import { AddRecipeHeaders } from 'client/components/Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddPopularRecipes } from 'client/components/Organisms/AddPopularRecipes/AddPopularRecipes.jsx';

const AddRecipe = () => {
  return (
    <div className={styles.AddRecipie}>
      <AddRecipeHeaders isTitle={true}>Add Recipe</AddRecipeHeaders>
      <AddRecipeForm />
      <AddPopularRecipes />
    </div>
  );
};

export { AddRecipe };
