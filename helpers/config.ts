import { diskStorage } from 'multer';

export const storageConfig = () => diskStorage({
    destination: `public/uploads`,
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})