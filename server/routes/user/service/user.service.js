import bcryptJs from "bcryptjs"

class UserService {
  async helloUser(req, res) {
    res.send("Hello User")
  }

  async hashPassword(password) {
    const hashedPass = bcryptJs.hash(password, 10)
    return hashedPass
  }
}
export const userService = new UserService()
