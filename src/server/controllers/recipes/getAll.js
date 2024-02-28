import { getAllRecipesFromDB } from '#handlers/recipesHandlers.js';

const getAllRecipes = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await getAllRecipesFromDB({ page, limit });
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

export { getAllRecipes };
