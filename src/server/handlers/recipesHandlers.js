import { Recipes } from '#schemas/recipes/recipeSchema.js';

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

const getFavoritesRecipes = async ({ id, page = 0, limit = 4 }) => {
  const recipes = await Recipes.find({
    favorites: `${id}`,
  })
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({
    favorites: id,
  }).countDocuments();
  return { recipes, pageAmount: Math.ceil(docNumbers / limit) };
};

const getRecipesFromDbIngredient = async ({
  page = 0,
  limit = 8,
  ingredientId = '',
}) => {
  const recipes = await Recipes.find({
    'ingredients.id': { $in: [`${ingredientId}`] },
  })
    .skip(page * limit)
    .limit(limit);
  const docNumbers = await Recipes.find({
    'ingredients.id': { $in: [ObjectId(`${ingredientId}`)] },
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
};
