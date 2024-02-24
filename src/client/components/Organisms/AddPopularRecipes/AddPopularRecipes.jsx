import { AddRecipeHeaders } from 'client/components/Atoms/AddRecipeHeader/AddRecipeHeader';
import styles from './AddPopularRecipes.module.css';

const AddPopularRecipes = () => {
  return (
    <div>
      <AddRecipeHeaders isTitle={false}>PopularRecipes</AddRecipeHeaders>
    </div>
  );
};

export { AddPopularRecipes };
