import { Recipes } from './recipeSchema.js';

const getAllRecipes = async () => {
  return Recipes.find({});
};

export { getAllRecipes };
