import { User } from 'server/models/schema/users/userSchema.js';
import { nanoid } from 'nanoid';

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
    // user.avatarURL = gravatar.url(email, { s: 250, protocol: "https" });
    // question if we will use it
    const verificationToken = nanoid();
    user.verificationToken = verificationToken;
    //   functionThatSendsEmailToVerifyAccount({
    //     emailTo: user.email,
    //     emailToken: verificationToken,
    //   });
    await user.save();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { signUp };
