import { getUserById } from '#handlers/userHandlers.js';

async function getUsersRecipes(req, res, next) {
  try {
    const id = req.user.id;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'No recipes' });
    }
    return res.status(200).json({
      data: { file: user.createdRecipes, message: 'nothing to load' },
    });
  } catch (error) {
    return next(error);
  }
}

export { getUsersRecipes };
