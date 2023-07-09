import { authService } from "../service/auth.service.js"

class AuthController {
  registration(req, res) {
    return res.send("Hello auth")
  }

  login(req, res) {
    return res.send("Hello Login")
  }
}

export const authController = new AuthController()
