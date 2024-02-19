import { getUserByEmail } from '#handlers/userHandlers.js';
import { sendVerificationEmail } from '#handlers/sendEmail.js';

async function resendVerifyEmail(req, res, next) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Missing required field email' });
    }
    const {
      userEmail = email,
      token = verificationToken,
      isVerified = verify,
    } = await getUserByEmail(email);
    if (!userEmail) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (isVerified) {
      return res
        .status(400)
        .json({ message: 'Verification has already been passed' });
    }
    await sendVerificationEmail(userEmail, token);
    return res.status(200).json({ data: 'Email has been sent' });
  } catch (error) {
    return next(error);
  }
}

export { resendVerifyEmail };
