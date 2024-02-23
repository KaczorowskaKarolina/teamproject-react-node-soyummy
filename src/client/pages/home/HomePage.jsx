import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { HomeTemplate } from './Templates/HomeTemplate';
import { fetchRecipes } from 'client/redux/recipes/operations';
import { fetchCategories } from 'client/redux/categories/operations';

const HomePage = () => {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
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
