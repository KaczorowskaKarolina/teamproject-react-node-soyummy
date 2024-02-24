import { BannerElements } from '#pages/recipe/components/Organisms/BannerElements/BannerElements.jsx';
import css from './RecipeBanner.module.css';

const RecipeBanner = ({ recipeName, recipeDesc, recipePrepTime }) => {
  return (
    <div className={css.RecipeBanner}>
      <BannerElements
        recipeName={recipeName}
        recipeDesc={recipeDesc}
        recipePrepTime={recipePrepTime}
      />
    </div>
  );
};

export { RecipeBanner };
