import { getUserById } from '#handlers/usersHelpers.js';

async function logout(req, res, next) {
  try {
    const id = req.user.id;
    const user = await getUserById(id);
    if (!user || !user.token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    user.token = null;
    await user.save();
    return res.status(204).json('No Content');
  } catch (error) {
    return next(error);
  }
}

export { logout };
