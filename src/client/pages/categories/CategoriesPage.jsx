import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';
import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesTitleList = await fetchCategories();
        setCategories(categoriesTitleList);
        const categoryRecipes = await fetchRecipes();
        const filteredRecipes = categoryRecipes.filter(
          recipe => recipe.category === categoryName
        );
        setRecipes(filteredRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CategoryTemplate titles={categories} name={categoryName} />
      <RecipeTemplate recipes={recipes} />
    </div>
  );
};

const fetchCategories = async () => {
  const categoriesResponse = await fetch(
    'http://localhost:3000/getAllCategoriesList'
  );

  if (!categoriesResponse.ok) {
    throw new Error('No results');
  }

  const categoriesResponseData = await categoriesResponse.json();
  const categoriesArray = categoriesResponseData.data.file;

  return categoriesArray.map(category => category.title);
};

const fetchRecipes = async () => {
  const RecipesResponse = await fetch('http://localhost:3000/getAllRecipes');

  if (!RecipesResponse.ok) {
    throw new Error('No results');
  }

  const RecipesResponseData = await RecipesResponse.json();
  return RecipesResponseData.data.file;
};

export { CategoriesPage, fetchCategories, fetchRecipes };
