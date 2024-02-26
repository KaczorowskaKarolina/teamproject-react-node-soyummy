import { getRecipesFromDbQuery } from '#handlers/recipesHandlers.js';

const getRecipesQuery = async (req, res, next) => {
  try {
    const { page, limit, query } = req.query;
    const response = await getRecipesFromDbQuery({ page, limit, query });
    return res.status(200).json({
      data: {
        file: response,
      },
      message: 'nothing to load',
    });
  } catch (error) {
    next(error.message);
  }
};

export { getRecipesQuery };