import { userService } from "../service/user.service.js"

class UserRoutes {
  helloUser(req, res) {
    return userService.helloUser(req, res)
  }
}
export const userRoute = new UserRoutes()
