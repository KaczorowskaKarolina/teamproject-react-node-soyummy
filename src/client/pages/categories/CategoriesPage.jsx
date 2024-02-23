import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';
import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';

const CategoriesPage = () => {
  return (
    <div>
      <CategoryTemplate />
      <RecipeTemplate />
    </div>
  );
};

export { CategoriesPage };
