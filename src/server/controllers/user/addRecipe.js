import { getUserById } from '#handlers/userHandlers.js';
import { createRecipe } from '#controllers/recipes/createRecipe.js';

async function addRecipe(req, res, next) {
  try {
    const id = req.user.id;
    const recipe = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Nope' });
    }
    if (!recipe) {
      return res.status(401).json({ message: 'Nope' });
    }
    const response = await createRecipe(recipe);
    if (!response) {
      return next({ message: 'Error' });
    }
    user.createdRecipes.push(response);
    await user.save();
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { addRecipe };
