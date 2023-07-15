import { Router } from "express"
import { postController } from "./controller/post.controller.js"
import { checkAuthMiddleware } from "../../middleware/checkAuth.js"
import { upload } from "../../middleware/imageUploads.js"

const postsRouter = Router()

postsRouter.get("/", postController.getPosts)
postsRouter.get("/post/:id", postController.getPost)
postsRouter.post("/create", checkAuthMiddleware, upload, postController.create)
postsRouter.put("/update/:id", checkAuthMiddleware, postController.update)
postsRouter.delete("/delete/:id", checkAuthMiddleware, postController.delete)

export default postsRouter
