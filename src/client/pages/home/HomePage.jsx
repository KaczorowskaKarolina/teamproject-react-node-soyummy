import { useEffect, useState } from 'react';
import { fetchCategories, fetchRecipes } from '../categories/CategoriesPage';
import { HomeTemplate } from './Templates/HomeTemplate';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesTitleList = await fetchCategories();
        console.log(categoriesTitleList);
        setCategories(categoriesTitleList);
        const recipes = await fetchRecipes();

        setRecipes(recipes);
        console.log(recipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(categories);
  }, [recipes, categories]);
  //   console.log(recipes);
  //   console.log(categories);
  //   return <HomeTemplate categories={categories} recipesByCategory={recipes} />;
};

export { HomePage };
