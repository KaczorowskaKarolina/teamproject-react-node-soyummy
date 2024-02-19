import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';
import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch(
          'http://localhost:3000/getAllCategoriesList'
        );

        if (!categoriesResponse.ok) {
          throw new Error('No results');
        }

        const categoriesResponseData = await categoriesResponse.json();
        const categoriesArray = categoriesResponseData.data.file;

        const categoriesTitleList = categoriesArray.map(
          category => category.title
        );

        setCategories(categoriesTitleList);
        const RecipesResponse = await fetch(
          'http://localhost:3000/getAllRecipes'
        );

        if (!RecipesResponse.ok) {
          throw new Error('No results');
        }

        const RecipesResponseData = await RecipesResponse.json();
        const recipesArray = await RecipesResponseData.data.file;

        const categoryRecipes = recipesArray.filter(
          recipe => recipe.category === categoryName
        );
        setRecipes(categoryRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categoryName, recipes]);

  return (
    <div>
      <CategoryTemplate titles={categories} name={categoryName} />
      <RecipeTemplate recipes={recipes} />
    </div>
  );
};

export { CategoriesPage };
