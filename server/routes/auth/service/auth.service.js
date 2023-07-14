import jwt from "jsonwebtoken"
import userModel from "../../user/model/user.model.js"
import { userService } from "../../user/service/user.service.js"
import {
  ALREADY_EMAIL,
  ALREADY_USERNAME,
  SUCCESS_MESSAGE,
  USER_NOTFOUND,
  WRONG_PASSWORD,
} from "../constance/messages.js"
import { AppError } from "../../../errors/AppError.js"

class AuthService {
  /**
   *
   * @param { username, email, password}
   * @returns success message
   */
  async registration(user) {
    const existUserByEmail = await userModel.findOne({ email: user.email })
    const existUserByUserName = await userModel.findOne({
      username: user.username,
    })
    if (existUserByEmail) {
      throw AppError.BadRequest(ALREADY_EMAIL)
    } else if (existUserByUserName) {
      throw AppError.BadRequest(ALREADY_USERNAME)
    } else {
      const passHashed = await userService.hashPassword(user.password)
      const newUser = new userModel({
        ...user,
        password: passHashed,
      })
      await newUser.save()

      const payload = {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      }

      const accessToken = await this.generateAccessToken(payload)

      return {
        message: SUCCESS_MESSAGE,
        newUser,
        accessToken,
      }
    }
  }

  /**
   *
   * @param userData
   * @returns message, accessToken, user
   */
  async login(userData) {
    const { username, password } = userData
    const user = await userService.findUserByUsername(username)
    if (!user) throw AppError.BadRequest(USER_NOTFOUND)

    const isPasswordCorrect = await userService.comparePass(
      password,
      user.password
    )
    if (!isPasswordCorrect) throw AppError.BadRequest(WRONG_PASSWORD)

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
    }

    const accessToken = await this.generateAccessToken(payload)

    return {
      message: "Вы вошли в систему.",
      accessToken,
      user,
    }
  }

  async getProfile(userData) {
    const { username } = userData
    return await userService.findUserByUsername(username)
  }

  async generateAccessToken(payload) {
    const token = jwt.sign({ user: payload }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    })
    return token
  }
}

export const authService = new AuthService()
