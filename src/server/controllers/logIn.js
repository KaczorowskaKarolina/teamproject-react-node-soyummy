import jwt from 'jsonwebtoken';
import { User } from '../models/schema/users/userSchema.js';

async function logIn(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
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
    // jesli bedziemy token zapisaywac w db to ponizej jest kod
    //   user.token = token;
    //   await user.save();
    return res.status(200).json({
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { logIn };
