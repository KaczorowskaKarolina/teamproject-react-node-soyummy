import { getPopularRecipesFromDb } from '#handlers/recipesHandlers.js';

const getPopularRecipes = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await getPopularRecipesFromDb({ page, limit });
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

export { getPopularRecipes };
