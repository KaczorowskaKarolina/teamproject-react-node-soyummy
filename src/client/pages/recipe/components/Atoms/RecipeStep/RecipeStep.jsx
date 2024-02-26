import css from './RecipeStep.module.css';

const RecipeStep = ({ recipeStepsText }) => {
  const recipeSteps = recipeStepsText.split('\n');

  return (
    <ol className={css.RecipeSteps}>
      {recipeSteps.map((step, index) => (
        <li key={index} className={css.RecipeStep}>
          {step}
        </li>
      ))}
    </ol>
  );
};

export { RecipeStep };
