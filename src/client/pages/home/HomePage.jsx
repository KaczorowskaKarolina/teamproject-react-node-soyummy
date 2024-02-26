import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { HomeTemplate } from './Templates/HomeTemplate';
import { fetchRecipes } from 'client/redux/recipes/operations';
import {
  changeQuery,
  fetchCategories,
} from 'client/redux/categories/operations';
import { selectQuery } from 'client/redux/categories/selectors';

const HomePage = () => {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [hideLoadButton, setHideLoadButton] = useState(false);
  const categoriesOnPage = useSelector(selectQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeQuery(0));
  }, [dispatch]);

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
          return recipesByCategory.map(recipe => {
            if (recipe.title === category) {
              recipe.recipes.push(currentRecipe);
            }
            return recipe;
          });
        });

        setRecipesByCategory(recipesByCategory);
        if (categoriesOnPage > 4) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }
        if (allCategories.length === 14) {
          setHideLoadButton(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [categoriesOnPage, dispatch]);
  return (
    <HomeTemplate
      recipesByCategory={recipesByCategory}
      hideLoadButton={hideLoadButton}
    />
  );
};

export { HomePage };
