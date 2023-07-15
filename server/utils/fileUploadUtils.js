import multer from "multer"
import path, { extname, dirname } from "path"
import { fileURLToPath } from "url"

export const fileUpload = (file, destination) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const upload = multer({
    dest: path.resolve(__dirname, "..", `uploads/${destination}`),
  })
}
