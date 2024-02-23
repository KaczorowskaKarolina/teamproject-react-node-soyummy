import { BannerElements } from '../Organisms/BannerElements/BannerElements';
import css from './RecipeBanner.module.css';

const RecipeBanner = ({ recipeName, recipeDesc, recipePrepTime }) => {
  return (
    <div className={css.RecipeBanner}>
        <BannerElements
          recipeName="Salmon Avocado Salad"
          recipePrepTime="20 min"
          recipeDesc="Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette."
        />
    </div>
  );
};

export { RecipeBanner };
