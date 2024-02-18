import jwt from 'jsonwebtoken';
import { getUserByEmail } from '#handlers/userHelpers.js';

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user || !user.validatePassword(password)) {
      return res.status(400).json({ message: 'Email or password incorrect.' });
    }
    if (!user.verify) {
      return res.status(400).json({ message: 'Account not verified' });
    }
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });
    user.token = token;
    await user.save();
    return res.status(200).json({
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    return next(error);
  }
}

export { logIn };
