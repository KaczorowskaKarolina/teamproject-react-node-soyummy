import { Recipes } from './recipeSchema.js';

const getAllRecipesFromDB = async () => {
  return await Recipes.find({});
};

export { getAllRecipesFromDB };
