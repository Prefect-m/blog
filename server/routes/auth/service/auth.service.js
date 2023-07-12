import { request, response } from "express"
import userModel from "../../user/model/user.model.js"
import { userService } from "../../user/service/user.service.js"

class AuthService {
  async registration(req, res) {
    const user = req.body

    const existUserByEmail = await userModel.findOne({ email: user.email })
    const existUserByUserName = await userModel.findOne({
      username: user.username,
    })
    if (existUserByEmail) {
      res.status(404).json({
        message: "Такой E-mail уже используется",
      })
    } else if (existUserByUserName) {
      res.status(404).json({
        message: "Пользователь с таким ником уже существует",
      })
    } else {
      const passHashed = await userService.hashPassword(user.password)
      const newUser = new userModel({
        ...user,
        password: passHashed,
      })
      await newUser.save()
      return res.json({
        message: "Регистрация прошла успешно",
      })
    }
  }

  async login(req, res) {
    res.send("Hello Login")
  }

  async getProfile(req, res) {
    res.send("Get profile")
  }
}

export const authService = new AuthService()
