import { getUserById } from '#handlers/userHandlers.js';
import { deleteRecipeInDb } from '#handlers/recipesHandlers.js';

async function removeRecipe(req, res, next) {
  try {
    const id = req.user.id;
    const recipeId = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    user.createdRecipes.pull({ createdRecipes: { $oid: recipeId } });
    await deleteRecipeInDb(recipeId);
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { removeRecipe };
