import { RecipeTitle } from '#pages/recipe/components/Atoms/RecipeTitle/RecipeTitle.jsx';
import { RecipeDesc } from '#pages/recipe/components/Atoms/RecipeDesc/RecipeDesc.jsx';
import css from './TitleWithDesc.module.css';

const TitleWithDescription = ({ recipeName, recipeDesc }) => {
  return (
    <div className={css.TitleWithDescription}>
      <RecipeTitle recipeName={recipeName} />
      <RecipeDesc recipeDesc={recipeDesc} />
    </div>
  );
};

export { TitleWithDescription };
