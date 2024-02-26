import { getUserById } from '#handlers/userHandlers.js';

async function getUsersRecipes(req, res, next) {
  try {
    const id = req.user.id;
    const response = await getUserById(id);
    if (!response) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    return res.status(204).json('No Content');
  } catch (error) {
    return next(error);
  }
}

export { getUsersRecipes };
