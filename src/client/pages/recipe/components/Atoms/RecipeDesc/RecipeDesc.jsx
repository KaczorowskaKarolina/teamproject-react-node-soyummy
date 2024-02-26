import css from './RecipeDesc.module.css';

const RecipeDesc = ({ recipeDesc }) => {
  return <p className={css.RecipeDesc}>{recipeDesc}</p>;
};
export { RecipeDesc };
