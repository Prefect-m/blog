import { Router } from "express"
import { authController } from "./controller/auth.controller.js"
import { checkAuthMiddleware } from "../../middleware/checkAuth.js"

const authRouter = Router()

authRouter.post("/registration", authController.registration)
authRouter.post("/login", authController.login)
authRouter.get("/profile", checkAuthMiddleware, authController.getProfile)

export default authRouter
