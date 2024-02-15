import { User } from 'server/models/schema/users/userSchema.js';
import { sendEmail } from 'server/handlers/sendEmail.js';

async function resendVerifyEmail(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Missing required field email' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.verify) {
      return res
        .status(400)
        .json({ message: 'Verification has already been passed' });
    }
    await sendEmail({
      to: user.email,
      subject: 'SoYummy - confirm your email!',
      text: `Hi. To confirm your email please click the button below:`,
      html: `<button type="button"><a href="http:localhost:3000/users/verify/${user.verificationToken}">Confirm email</a></button>`,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { resendVerifyEmail };
