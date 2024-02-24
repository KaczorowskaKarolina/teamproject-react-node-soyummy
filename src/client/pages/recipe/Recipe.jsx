// import { RecipeBanner } from '#pages/recipe/components/Templates/RecipeBanner/RecipeBanner.jsx';
// import { RecipeIngredientsList } from '#pages/recipe/components/Templates/RecipeIngredientsList/RecipeIngredientsList.jsx';
// import { RecipeDetails } from '#pages/recipe/components/Templates/RecipeDetails/RecipeDetails.jsx';
import css from './Recipe.module.css';
import React, {
  // useState,
  useEffect,
} from 'react';
import { getAllRecipes } from 'server/routes/recipes/recipesRoutes.js';

const Recipe = ({
  recipeName,
  recipeDesc,
  recipePrepTime,
  ingImageUrl,
  ingTitle,
  ingAmount,
  recipeStepsText,
  imageUrl,
}) => {
  // const [data, setData] = useState(null);
  // getAllRecipes()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllRecipes();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={css.Recipe}>
      {/* <RecipeBanner
        recipeName={recipeName}
        recipeDesc={recipeDesc}
        recipePrepTime={recipePrepTime}
      />
      <RecipeIngredientsList
        ingImageUrl={ingImageUrl}
        ingTitle={ingTitle}
        ingAmount={ingAmount}
      />
      <RecipeDetails recipeStepsText={recipeStepsText} imageUrl={imageUrl} /> */}
    </div>
  );
};

export { Recipe };

// Props explanation

// Banner props:
// recipeName - Main title on page
// recipeDesc - Description below title
// recipePrepTime - Preparation time

// Ingredient box props:
// ingImageUrl - Used to show ingredient image
// ingTitle - Ingredient name next to image
// ingAmount - Needed amount

// Recipes details props:
// recipeStepsText - Recipe step by step
// imageUrl - Recipe photo
