import { RecipeOrganism } from '../Organisms/recipeOrganisms/RecipeOrganism';
import css from './RecipeTemplate.module.css';

const RecipeTemplate = ({ recipes }) => {
  // console.log(recipes[1]._id);
  return (
    <ul className={css.RecipeTemplate}>
      {recipes &&
        recipes.map(recipe => (
          <RecipeOrganism
            imageSource={recipe.thumb}
            title={recipe.title}
            id={recipe._id}
          />
        ))}
    </ul>
  );
};

export { RecipeTemplate };
