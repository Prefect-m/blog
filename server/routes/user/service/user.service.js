class UserService {
  helloUser(req, res) {
    res.send("Hello User")
  }
}
export const userService = new UserService()
