import { AppError } from "../errors/AppError.js"
import Jwt from "jsonwebtoken"

export const checkAuthMiddleware = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "")
  if (token) {
    try {
      const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = decoded.user
      next()
    } catch (err) {
      throw AppError.UnauthorizeError()
    }
  } else {
    throw AppError.UnauthorizeError()
  }
}
