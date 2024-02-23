import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeTemplate = () => {
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getAllRecipes');

        if (!response.ok) {
          throw new Error('Ups idź spać!');
        }

        const responseData = await response.json();
        const recipesArray = await responseData.data.file;

        const categoryRecipes = recipesArray.filter(
          recipe => recipe.category === categoryName
        );

        console.log(categoryRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [categoryName]);

  return <div>{categoryName}</div>;
};

export { RecipeTemplate };
