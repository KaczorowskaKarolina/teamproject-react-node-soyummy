import { getAllRecipes } from '#handlers/recipesHandlers.js';

const getAllRecipes = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await getAllRecipesFromDB({ page, limit });
    return res.status(200).json({
      status: 'success',
      code: 200,
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
