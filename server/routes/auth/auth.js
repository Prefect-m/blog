import { Router } from "express"
import { authController } from "./controller/auth.controller.js"

const authRouter = Router()

authRouter.get("/registration", authController.registration)
authRouter.get("/login", authController.login)

export default authRouter
