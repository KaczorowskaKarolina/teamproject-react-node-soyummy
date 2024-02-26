import { getRecipeByIdFromDb } from '#handlers/recipesHandlers.js';

const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getRecipeByIdFromDb(id);
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

export { getRecipeById };
