import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';
import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from 'client/redux/recipes/operations.js';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const categoriesTitleList = await fetchCategories();
        // setCategories(categoriesTitleList);
        const allRecipes = await dispatch(fetchRecipes());
        const filteredRecipes = allRecipes.payload.filter(
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
      {/* <CategoryTemplate titles={categories} name={categoryName} /> */}
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

export { CategoriesPage, fetchCategories };
