import { Router } from "express"
import { authController } from "./controller/auth.controller.js"

const authRouter = Router()

authRouter.post("/registration", authController.registration)
authRouter.post("/login", authController.login)
authRouter.get("/profile", authController.getProfile)

export default authRouter
