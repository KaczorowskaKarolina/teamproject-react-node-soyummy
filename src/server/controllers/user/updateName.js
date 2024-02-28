import { getUserById } from '#handlers/userHandlers.js';

async function updateName(req, res, next) {
  try {
    const id = req.user.id;
    const { name } = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    user.name = name;
    return res.status(204).json({ message: 'No content' });
  } catch (error) {
    return next(error);
  }
}

export { updateName };
