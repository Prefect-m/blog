import { authService } from "../service/auth.service.js"

class AuthController {
  registration(req, res) {
    return authService.registration(req, res)
  }

  login(req, res) {
    return authService.login(req, res)
  }

  getProfile(req, res) {
    return authService.getProfile(req, res)
  }
}

export const authController = new AuthController()
