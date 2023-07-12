import { authService } from "../service/auth.service.js"

class AuthController {
  async registration(req, res, next) {
    try {
      const user = req.body
      const { message } = await authService.registration(user)
      res.status(200).json({
        message,
      })
    } catch (err) {
      next(err)
    }
  }

  async login(req, res, next) {
    try {
      const userData = req.body
      const { message, accessToken, user } = await authService.login(userData)
      res.json({
        message: message,
        accessToken,
        user,
      })
    } catch (err) {
      next(err)
    }
  }

  async getProfile(req, res) {
    const user = req.user
    const userData = await authService.getProfile(user)
    res.status(200).json({
      userData,
    })
  }
}

export const authController = new AuthController()
