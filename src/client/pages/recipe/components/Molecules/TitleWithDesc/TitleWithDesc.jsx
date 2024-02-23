import { RecipeTitle } from '../../Atoms/RecipeTitle/RecipeTitle';
import { RecipeDesc } from '../../Atoms/RecipeDesc/RecipeDesc';
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
