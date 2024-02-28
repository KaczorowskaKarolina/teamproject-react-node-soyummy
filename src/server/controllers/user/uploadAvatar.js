import { getUserById } from '#handlers/userHandlers.js';
import Jimp from 'jimp';
import { promises as fs } from 'fs';
import { nanoid } from 'nanoid';

async function uploadAvatar(req, res, next) {
  try {
    const { id } = req.user;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json('Not found');
    }
    const fileName = req.file.originalname;
    const avatar = await Jimp.read(`src/server/tmp/${fileName}`);
    const randomName = nanoid();
    avatar.cover(250, 250);
    await avatar.writeAsync(
      `src/server/public/avatars/${randomName}${fileName}`
    );
    user.avatarURL = `http://localhost:5000/avatars/${randomName}${fileName}`;
    await user.save();
    return res.status(200).json({
      avatarUrl: `http://localhost:5000/avatars/${randomName}${fileName}`,
    });
  } catch (error) {
    return next(error);
  } finally {
    fs.unlink(`src/server/tmp/${fileName}`);
  }
}

export { uploadAvatar };
