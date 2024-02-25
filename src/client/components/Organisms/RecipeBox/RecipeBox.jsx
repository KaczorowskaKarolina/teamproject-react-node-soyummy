import { Image } from '#atoms/RecipeImage/Image.jsx';
import { CurvedButton } from '#atoms/CurvedButton/CurvedButton.jsx';
import { Time } from '#atoms/RecipePrepTime/Time.jsx';
import { NameWithDescription } from '#molecules/NameWithDescription/NameWithDescription.jsx';
import css from './RecipeBox.module.css';

const RecipeBox = ({
  imageUrl,
  recipesOrFavorites,
  recipeName,
  recipeDecs,
  recipePrepTime,
}) => {
  return (
    <div className={css.RecipeBox}>
      <Image imageUrl={imageUrl} />
      <div className={css.RecipeData}>
        <NameWithDescription
          recipesOrFavorites={recipesOrFavorites}
          recipeName={recipeName}
          recipeDecs={recipeDecs}
        />
        <div className={css.RecipeAddons}>
          <Time recipePrepTime={recipePrepTime} />
          <CurvedButton
            title="See recipe"
            greenOrBlack="green"
            recipesOrFavorites={recipesOrFavorites}
          />
        </div>
      </div>
    </div>
  );
};

export { RecipeBox };

// Props explanation:

//  imageUrl = from database
//  recipesOrFavorites = recipes/favorites --> to determine on which page the component is
//  recipeName = from database
//  recipeDecs = from database
//  recipePrepTime = from database
