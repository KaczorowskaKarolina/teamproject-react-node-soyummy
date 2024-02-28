import { deleteRecipeInDb } from '#handlers/recipesHandlers.js';

const deleteRecipe = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const recipe = await deleteRecipeInDb(id);
      req.recipe = recipe;
      return next();
    } catch (error) {
      return next(error);
    }
  };
};

export { deleteRecipe };
