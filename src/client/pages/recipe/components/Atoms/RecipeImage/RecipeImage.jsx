import css from './RecipeImage.module.css';

const RecipeImage = ({ imageUrl }) => {
  return <img className={css.RecipeImage} src={imageUrl} alt="" />;
};

export { RecipeImage };
