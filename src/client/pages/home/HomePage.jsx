import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { HomeTemplate } from './Templates/HomeTemplate';
import { fetchCategories } from '../categories/CategoriesPage';
import { fetchRecipes } from 'client/redux/recipes/operations';

const HomePage = () => {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await dispatch(fetchCategories());
        const allCategories = await categoriesResponse.payload;

        const recipesByCategory = [];
        allCategories.map(category =>
          recipesByCategory.push({
            title: category.title,
            recipes: [],
          })
        );

        setCategories(recipesByCategory);

        const recipesResponse = await dispatch(fetchRecipes());
        const allRecipes = await recipesResponse.payload;

        allRecipes.map(recipe => {
          const currentRecipe = recipe;
          const category = recipe.category;
          recipesByCategory.map(recipe => {
            if (recipe.title === category) {
              recipe.recipes.push(currentRecipe);
            }
          });
        });
        setRecipesByCategory(recipesByCategory);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return <HomeTemplate recipesByCategory={recipesByCategory} />;
};

export { HomePage };
