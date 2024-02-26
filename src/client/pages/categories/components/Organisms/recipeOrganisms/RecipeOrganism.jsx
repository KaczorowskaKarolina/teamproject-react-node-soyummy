import { RecipeImageAtom } from '../../Atoms/recipeAtoms/RecipeImageAtom';
import { RecipeTitleAtom } from '../../Atoms/recipeAtoms/RecipeTitleAtom';
import css from './RecipeOrganism.module.css';

const RecipeOrganism = ({ imageSource, title }) => {
  return (
    <li className={css.RecipeOrganism}>
      <RecipeImageAtom imageSrc={imageSource} title={title} />
      <RecipeTitleAtom title={title} />
    </li>
  );
};

export { RecipeOrganism };
