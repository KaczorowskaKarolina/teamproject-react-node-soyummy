import { getRecipesFromDbCategory } from '#handlers/recipesHandlers.js';

const getRecipesByCategory = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const { category } = req.params;
    const response = await getRecipesFromDbCategory({ page, limit, category });
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

export { getRecipesByCategory };
