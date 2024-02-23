import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchRecipes } from 'client/redux/recipes/operations.js';
import { fetchCategories } from 'client/redux/categories/operations.js';
import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';
import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchCategories = await dispatch(fetchCategories());
        const allCategories = fetchCategories.payload.map(
          category => category.title
        );
        setCategories(allCategories);

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
      <CategoryTemplate titles={categories} name={categoryName} />
      <RecipeTemplate recipes={recipes} />
    </div>
  );
};

export { CategoriesPage, fetchCategories };
