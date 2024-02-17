import { User } from '../models/schema/users/userSchema.js';

async function logout(req, res) {
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user || !user.token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    user.token = null;
    await user.save();
    return res.status(204).json('No Content');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { logout };
