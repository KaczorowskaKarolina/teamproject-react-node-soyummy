import { TitleWithDescription } from '#pages/recipe/components/Molecules/TitleWithDesc/TitleWithDesc.jsx';
import { CurvedButton } from '#atoms/CurvedButton/CurvedButton.jsx';
import { RecipePrepTime } from '#pages/recipe/components/Atoms/RecipePrepTime/RecipePrepTime.jsx';

import css from './BannerElements.module.css';

const BannerElements = ({ recipeName, recipeDesc, recipePrepTime }) => {
  return (
    <div className={css.BannerElements}>
      <TitleWithDescription recipeName={recipeName} recipeDesc={recipeDesc} />
      <CurvedButton
        title="Add to favorite recipes"
        recipesOrFavorites="recipeBanner"
      />
      <RecipePrepTime recipePrepTime={recipePrepTime} />
    </div>
  );
};

export { BannerElements };
