import { createRecipeToDb } from '#handlers/recipesHandlers.js';

const createRecipe = async recipe => {
  try {
    const response = await createRecipeToDb({ recipe });
    return response;
  } catch (error) {
    return error;
  }
};

export { createRecipe };
