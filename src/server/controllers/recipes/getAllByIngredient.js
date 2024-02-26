import { getRecipesFromDbIngredient } from '#handlers/recipesHandlers.js';

const getRecipesByIngredient = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const { ingredientId } = req.params;
    const response = await getRecipesFromDbIngredient({
      page,
      limit,
      ingredientId,
    });
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

export { getRecipesByIngredient };
