import { addToFavoritesInDb } from '#handlers/recipesHandlers.js';

async function addToFavorites(req, res, next) {
  try {
    const id = req.user.id;
    const { recipeId } = req.params;
    // const user = await getUserById(id);
    // if (!user) {
    //   return res.status(401).json({ message: 'Nope' });
    // }
    await addToFavoritesInDb({ userId: id, recipeId });
    return res.status(204).json({ data: { message: 'no content' } });
  } catch (error) {
    return next(error);
  }
}

export { addToFavorites };
