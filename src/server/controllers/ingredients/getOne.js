import { getIngredientByIdFromDb } from '#handlers/ingredientsHandlers.js';

const getIngredientById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await getIngredientByIdFromDb(id);
    return res.status(200).json({
      data: {
        file: response,
      },
      message: 'nothing to load',
    });
  } catch (error) {
    return next(error);
  }
};

export { getIngredientById };
