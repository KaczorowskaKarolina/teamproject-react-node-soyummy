import { RecipeBanner } from '#pages/recipe/components/Templates/RecipeBanner/RecipeBanner.jsx';
import { RecipeIngredientsList } from '#pages/recipe/components/Templates/RecipeIngredientsList/RecipeIngredientsList.jsx';
// import { RecipeDetails } from '#pages/recipe/components/Templates/RecipeDetails/RecipeDetails.jsx';
import css from './Recipe.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () =>
  //   {
  //   recipeName,
  //   recipeDesc,
  //   recipePrepTime,
  //   ingImageUrl,
  //   ingTitle,
  //   ingAmount,
  //   recipeStepsText,
  //   imageUrl,
  // }
  {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [recipeName, setRecipeName] = useState('loading...');
    const [recipeDesc, setRecipeDesc] = useState('loading...');
    const [recipePrepTime, setRecipePrepTime] = useState('loading...');
    const [ingList, setIngList] = useState([]);

    // let recipeName = `loading...`;
    // let recipeDesc = `loading...`;
    // let recipePrepTime = `loading...`;
    // let ingList = [];

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            `http://localhost:5000/api/recipes/${id}`
          );
          const responseJson = await response.json();
          const dataFile = await responseJson.data.file;
          setData(dataFile);

          setRecipeName(dataFile.title);
          setRecipeDesc(dataFile.description);
          setRecipePrepTime(dataFile.time);
          setIngList(dataFile.ingredients);
        } catch (err) {
          console.log(err);
        }
      }

      fetchData();
    }, [id]);

    // recipe

    // ingredients

    // recipe
    // let recipeStepsText = data ? data.description : `loading...`;
    // let imageUrl = data ? data.description : `loading...`;
    return (
      <div className={css.Recipe}>
        <RecipeBanner
          recipeName={recipeName}
          recipeDesc={recipeDesc}
          recipePrepTime={recipePrepTime}
        />
        {data && ingList && <RecipeIngredientsList ingList={ingList} />}
        {/* <RecipeDetails recipeStepsText={recipeStepsText} imageUrl={imageUrl} /> */}
      </div>
    );
  };

export { Recipe };

// Props explanation

// Banner props:
// recipeName - Main title on page
// recipeDesc - Description below title
// recipePrepTime - Preparation time

// Ingredient box props:
// ingImageUrl - Used to show ingredient image
// ingTitle - Ingredient name next to image
// ingAmount - Needed amount

// Recipes details props:
// recipeStepsText - Recipe step by step
// imageUrl - Recipe photo
