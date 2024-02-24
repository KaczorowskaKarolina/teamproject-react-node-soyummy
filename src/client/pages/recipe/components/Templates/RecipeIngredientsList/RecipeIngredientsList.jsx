import { ListHeader } from '#pages/recipe/components/Atoms/ListHeader/ListHeader.jsx';
import { IngBox } from '#pages/recipe/components/Organisms/IngBox/IngBox.jsx';
import css from './RecipeIngredientsList.module.css';

const RecipeIngredientsList = ({ ingImageUrl, ingTitle, ingAmount }) => {
  return (
    <div className={css.RecipeIngredientsList}>
      <div className={css.IngListHeader}>
        <ListHeader />
      </div>
      <div className={css.IngListElements}>
        <IngBox
          ingImageUrl={ingImageUrl}
          ingTitle={ingTitle}
          ingAmount={ingAmount}
        />
      </div>
    </div>
  );
};

export { RecipeIngredientsList };
