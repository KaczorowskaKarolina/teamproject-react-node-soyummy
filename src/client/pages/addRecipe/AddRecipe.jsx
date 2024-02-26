import { AddRecipeForm } from './components/Templates/AddRecipeForm/AddRecipeForm.jsx';
import { AddRecipeHeaders } from './components/Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddPopularRecipes } from './components/Templates/AddPopularRecipes/AddPopularRecipes.jsx';
import { SocialMedia } from './components/Organisms/SocialMedia/SocialMedia.jsx';

// import { fetchPopularRecipes } from 'client/redux/recipes/operations.js';
// import { fetchCategories } from 'client/redux/categories/operations.js';

import styles from './AddRecipe.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const AddRecipe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPopularRecipes());
    // dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <AddRecipeHeaders isTitle={true}>Add Recipe</AddRecipeHeaders>
      <div className={styles.AddRecipe}>
        <div className={styles.Recipe}>
          <AddRecipeForm />
        </div>
        <div className={styles.Addon}>
          <SocialMedia />
          <AddPopularRecipes />
        </div>
      </div>
    </div>
  );
};

export { AddRecipe };
