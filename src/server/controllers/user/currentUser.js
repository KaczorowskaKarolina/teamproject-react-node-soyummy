import { getUserById } from '#handlers/userHelpers.js';

async function currentUser(req, res, next) {
  try {
    const user = await getUserById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    return next(error);
  }
}

export { currentUser };
