import { User } from '#schema/users/userSchema.js';

async function verify(req, res) {
  try {
    const user = await User.findOne({
      verificationToken: req.params.verificationToken,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.verify = true;
    user.verificationToken = 'verified';
    await user.save();
    return res.status(200).json({ message: 'Verification successful' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { verify };
