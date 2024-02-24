import { Recipes } from './recipeSchema.js';

const getAllRecipesFromDB = async () => {
  return await Recipes.find({});
};

const getRecipeByIdFromDB = async recipeId => {
  return await Recipes.find({ _id: recipeId });
};

export { getAllRecipesFromDB, getRecipeByIdFromDB };
