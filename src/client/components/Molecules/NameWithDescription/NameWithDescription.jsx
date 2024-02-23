import { Name } from '#atoms/RecipeName/Name.jsx';
import { Description } from '#atoms/RecipeDescription/Description.jsx';
import { DeleteButton } from '#atoms/DeleteButton/DeleteButton.jsx';
import css from './NameWithDescription.module.css';

const NameWithDescription = ({
  recipeName,
  recipesOrFavorites,
  recipeDecs,
}) => {
  return (
    <div className={css.Description}>
      <div className={css.NameWithButton}>
        <Name recipeName={recipeName} />
        <DeleteButton recipesOrFavorites={recipesOrFavorites} />
      </div>
      <Description recipeDecs={recipeDecs} />
    </div>
  );
};

export { NameWithDescription };
