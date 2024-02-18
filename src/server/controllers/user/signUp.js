import { nanoid } from 'nanoid';
import { sendEmail } from '../../handlers/sendEmail.js';
import { User } from '../../models/schema/users/userSchema.js';

async function signUp(req, res) {
  try {
    const { email, password, name } = req.body;
    if (await User.findOne({ email })) {
      return res
        .status(409)
        .json({ message: 'User with this email already exist.' });
    }
    const user = new User({ email });
    user.setPassword(password);
    user.name = name;
    // user.avatarURL = gravatar.url(email, { s: 250, protocol: "https" });
    // question if we will use it
    const verificationToken = nanoid();
    user.verificationToken = verificationToken;
    sendEmail({
      to: user.email,
      subject: 'SoYummy - confirm your email!',
      text: 'Welcome in SoYummy! To verify your account please click this link:',
      html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm account</a>`,
    });
    await user.save();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { signUp };
