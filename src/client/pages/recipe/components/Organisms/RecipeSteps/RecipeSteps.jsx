import { RecipeStep } from '#pages/recipe/components/Atoms/RecipeStep/RecipeStep';
import css from './RecipeSteps.module.css';

const RecipeSteps = ({ recipeStepsText }) => {
  return (
    <div className={css.RecipeSteps}>
      <h3 className={css.RecipeStepsTitle}>Recipe Preparation</h3>
      <div className={css.RecipeStepsText}>
        <RecipeStep recipeStepsText={recipeStepsText} />
      </div>
    </div>
  );
};

export { RecipeSteps };
