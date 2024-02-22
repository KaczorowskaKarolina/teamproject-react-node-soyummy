import { CategoryAtom } from 'client/pages/categories/components/Atoms/categoryAtoms/CategoryAtom';
import { RecipeOrganism } from 'client/pages/categories/components/Organisms/recipeOrganisms/RecipeOrganism';

const HomeOrganism = ({ categories, recipesByCategory }) => {
  console.log(recipesByCategory);
  return (
    <ul>
      {categories &&
        categories.map(category => <CategoryAtom title={category} />)}
      <ul>
        {recipesByCategory.map(recipe => {
          const { thumb, _id, title } = recipe;
          return <RecipeOrganism imageSource={thumb} title={title} id={_id} />;
        })}
      </ul>
    </ul>
  );
};

export { HomeOrganism };
