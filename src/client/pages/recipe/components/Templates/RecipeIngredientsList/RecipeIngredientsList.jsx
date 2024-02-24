import { ListHeader } from '#pages/recipe/components/Atoms/ListHeader/ListHeader.jsx';
import { IngBox } from '#pages/recipe/components/Organisms/IngBox/IngBox.jsx';
import css from './RecipeIngredientsList.module.css';

const RecipeIngredientsList = ({ ingList }) => {
  return (
    <div className={css.RecipeIngredientsList}>
      <div className={css.IngListHeader}>
        <ListHeader />
      </div>
      <div className={css.IngListElements}>
        {ingList.map(ing => {
          const { id, measure } = ing;

          return (
            <IngBox
              ingImageUrl={id}
              ingTitle={id}
              ingAmount={measure}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { RecipeIngredientsList };
