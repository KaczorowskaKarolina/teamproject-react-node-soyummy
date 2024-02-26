import { getAllIngredientsFromDb } from '#handlers/ingredientsHandlers.js';

const getAllIngredients = async (req, res, next) => {
  try {
    const response = await getAllIngredientsFromDb();
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

export { getAllIngredients };
