import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/posts/")
  },
  filename: (req, file, cb) => {
    const fileName = Date.now().toString()
    cb(null, `${fileName} - ${file.originalname}`)
  },
})
export const upload = multer({ storage }).array("image", 3)
