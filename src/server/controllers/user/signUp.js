import { nanoid } from 'nanoid';
import { sendVerificationEmail } from '#handlers/sendEmail.js';
import { getUserByEmail, createUser } from '#handlers/userHandlers.js';
import gravatar from 'gravatar';

async function signUp(req, res) {
  try {
    const { email, password, name } = req.body;
    if (await getUserByEmail(email)) {
      return res
        .status(409)
        .json({ message: 'User with this email already exist.' });
    }
    const user = createUser(email);
    user.setPassword(password);
    user.name = name;
    user.avatarURL = gravatar.url(email, { s: 250, protocol: 'https' });
    const verificationToken = nanoid();
    user.verificationToken = verificationToken;
    await sendVerificationEmail({ emailTo: user.email, verificationToken });
    await user.save();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { signUp };
