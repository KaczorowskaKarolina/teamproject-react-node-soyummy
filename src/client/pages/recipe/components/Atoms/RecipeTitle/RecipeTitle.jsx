import css from './RecipeTitle.module.css';

const RecipeTitle = ({ recipeName }) => {
  return <h1 className={css.RecipeTitle}>{recipeName}</h1>;
};
export { RecipeTitle };
