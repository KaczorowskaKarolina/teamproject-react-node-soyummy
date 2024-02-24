import { getCategoriesListFromDb } from '#server/models/schema/categoriesList/categoriesList.js';
import { getAllRecipesFromDB } from '#server/models/schema/recipes/recipes.js';
import { getRecipeByIdFromDB } from '#server/models/schema/recipes/recipes.js';

const getAllRecipes = async (req, res, next) => {
  const response = await getAllRecipesFromDB();
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

const getRecipeById = async (req, res, next) => {
  const { id } = req.params;
  const response = await getRecipeByIdFromDB(id);
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

const getCategoriesList = async (req, res, next) => {
  const response = await getCategoriesListFromDb();
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

export { getAllRecipes, getCategoriesList, getRecipeById };
