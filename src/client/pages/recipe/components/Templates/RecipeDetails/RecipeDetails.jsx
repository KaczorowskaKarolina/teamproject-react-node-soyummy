import { RecipeSteps } from '#pages/recipe/components/Organisms/RecipeSteps/RecipeSteps.jsx';
import { RecipeImage } from '#pages/recipe/components/Atoms/RecipeImage/RecipeImage.jsx';
import css from './RecipeDetails.module.css';

const RecipeDetails = ({ recipeStepsText, imageUrl }) => {
  return (
    <div className={css.RecipeDetails}>
      <RecipeSteps recipeStepsText={recipeStepsText} />
      <RecipeImage imageUrl={imageUrl} />
    </div>
  );
};

export { RecipeDetails };
