import bcryptJs from "bcryptjs"
import userModel from "../model/user.model.js"
import { AppError } from "../../../errors/AppError.js"

class UserService {
  constructor() {
    this.salt = 10
  }

  /**
   * @param {@username: String}
   * @returns user
   */
  async findUserByUsername(username) {
    const user = await userModel.findOne({ username })
    if (!user) {
      throw AppError.BadRequest("Пользователь не найден")
    } else {
      return user
    }
  }

  /**
   *
   * @param password
   * @returns hashPassword by BycryptJs
   */
  async hashPassword(password) {
    const hashedPass = bcryptJs.hash(password, this.salt)
    return hashedPass
  }

  async comparePass(password, oldPassword) {
    const comparePassword = await bcryptJs.compare(password, oldPassword)
    return comparePassword
  }
}
export const userService = new UserService()
