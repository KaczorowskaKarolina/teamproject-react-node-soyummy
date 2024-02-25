import { Recipes } from '#schemas/recipes/recipeSchema.js';

const getAllRecipesFromDb = async ({ page = 0, limit = 6 }) => {
  const recipes = await Recipes.find({})
    .skip(page * limit)
    .limit(limit);
  const pageAmount = await Recipes.find({}).countDocuments();
  return { recipes, pageAmount };
};

const getRecipeByIdFromDb = async recipeId => {
  return await Recipes.findById(recipeId);
};

const getRecipesFromDbQuery = async ({ page = 0, limit = 6, guery = '' }) => {
  const recipes = await Recipes.find({
    title: { $regex: `.*${guery}.*`, $options: 'i' },
  })
    .skip(page * limit)
    .limit(limit);
  const pageAmount = await Recipes.find({}).countDocuments();
  return { recipes, pageAmount };
};

const getRecipesFromDbCategory = async ({
  page = 0,
  limit = 8,
  category = '',
}) => {
  const recipes = await Recipes.find({
    category: { $regex: `.*${category}.*`, $options: 'i' },
  })
    .skip(page * limit)
    .limit(limit);
  const pageAmount = await Recipes.find({}).countDocuments();
  return { recipes, pageAmount };
};

// code below is not finihsed
const getRecipesFromDbIngredient = async ({
  page = 0,
  limit = 8,
  ingredient = '',
}) => {
  const recipes = await Recipes.find({
    ingredient: { $regex: `.*${ingredient}.*`, $options: 'i' },
  })
    .skip(page * limit)
    .limit(limit);
  const pageAmount = await Recipes.find({}).countDocuments();
  return { recipes, pageAmount };
};

export {
  getAllRecipesFromDb,
  getRecipeByIdFromDb,
  getRecipesFromDbQuery,
  getRecipesFromDbCategory,
};
