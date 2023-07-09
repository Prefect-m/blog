import { request, response } from "express"
import userModel from "../../user/model/user.model.js"

class AuthService {
  registration(req, res) {
    console.log(req.body)
  }

  login(req, res) {
    res.send("Hello Login")
  }

  getProfile(req, res) {
    res.send("Get profile")
  }
}

export const authService = new AuthService()
