import { Recipes } from '#schemas/recipes/recipeSchema.js';
import { Types } from 'mongoose';

const getAllRecipesFromDb = async ({ page = 0, limit = 6 }) => {
  const recipes = await Recipes.find({})
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({}).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
};

const getRecipeByIdFromDb = async recipeId => {
  return await Recipes.findById(recipeId);
};

const getRecipesFromDbQuery = async ({ page = 0, limit = 6, query = '' }) => {
  const recipes = await Recipes.find({
    title: { $regex: `.*${query}.*`, $options: 'i' },
  })
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({
    title: { $regex: `.*${query}.*`, $options: 'i' },
  }).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
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
  const docNumbers = await Recipes.find({
    category: { $regex: `.*${category}.*`, $options: 'i' },
  }).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
};

const getFavoritesRecipes = async ({ userId, page = 0, limit = 4 }) => {
  const recipes = await Recipes.find({
    favorites: new Types.ObjectId(userId),
  })
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({
    favorites: new Types.ObjectId(userId),
  }).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
};

const getRecipesFromDbIngredient = async ({
  page = 0,
  limit = 8,
  ingredientId = '',
}) => {
  const recipes = await Recipes.find({
    'ingredients.id': new Types.ObjectId(ingredientId),
  })
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({
    'ingredients.id': new Types.ObjectId(ingredientId),
  }).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
};

const getPopularRecipesFromDb = async ({ page = 0, limit = 5 }) => {
  const response = await Recipes.find({})
    .sort({ favorites: 1 })
    .skip(page * limit)
    .limit(limit);
  return response;
};

const createRecipeToDb = async ({ recipe }) => {
  const response = await new Recipes({ ...recipe });
  return response;
};

const deleteRecipeInDb = async id => {
  const response = await Recipes.findByIdAndDelete(id);
  return response;
};

const addToFavoritesInDb = async ({ userId, recipeId }) => {
  const recipe = await Recipes.findById(recipeId);
  recipe.favorites.push(new Types.ObjectId(userId));
  await recipe.save();
  return;
};

const deleteFromFavoritesInDb = async ({ userId, recipeId }) => {
  const recipe = await Recipes.findById(recipeId);
  recipe.favorites.pull(userId);
  await recipe.save();
  return;
};

export {
  getAllRecipesFromDb,
  getRecipeByIdFromDb,
  getRecipesFromDbQuery,
  getRecipesFromDbCategory,
  getFavoritesRecipes,
  getRecipesFromDbIngredient,
  createRecipeToDb,
  deleteRecipeInDb,
  getPopularRecipesFromDb,
  addToFavoritesInDb,
  deleteFromFavoritesInDb,
};
