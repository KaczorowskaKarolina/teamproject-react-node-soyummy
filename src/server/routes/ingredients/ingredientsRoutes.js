import {
  getAllIngredientsFromDB,
  getIngredientByIdFromDB,
} from '#server/models/schema/ingredients/ingredients.js';

const getAllIngredients = async (req, res, next) => {
  const response = await getAllIngredientsFromDB();
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

const getIngredientById = async (req, res, next) => {
  const { id } = req.params;
  const response = await getIngredientByIdFromDB(id);
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
};

export { getAllIngredients, getIngredientById };
