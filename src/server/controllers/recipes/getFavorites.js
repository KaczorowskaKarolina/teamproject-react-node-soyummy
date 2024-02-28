import { getFavoritesRecipes } from '#handlers/recipesHandlers.js';

async function getFavorites(req, res, next) {
  try {
    const id = req.user.id;
    const response = await getFavoritesRecipes({ userId: id });
    if (!response) {
      return res.status(401).json({ message: 'No recipes' });
    }
    return res.status(200).json({
      data: {
        file: response,
      },
      message: 'nothing to load',
    });
  } catch (error) {
    return next(error);
  }
}

export { getFavorites };
