import path from 'path';
import multer from 'multer';

const tmpDir = path.join(process.cwd(), 'src/server/tmp');
const avatarDir = path.join(process.cwd(), 'src/public/avatar');
const imagesDir = path.join(process.cwd(), 'src/public/images');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileMiddleware = multer({ storage });

export { tmpDir, avatarDir, imagesDir, fileMiddleware };
