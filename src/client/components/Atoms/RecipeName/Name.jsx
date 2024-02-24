import css from './Name.module.css';

const Name = ({ recipeName }) => {
  return <h2 className={css.MealName}>{recipeName}</h2>;
};

export { Name };
