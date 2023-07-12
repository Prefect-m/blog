import { AppError } from "../errors/AppError.js"

export const errorMiddleware = (err, req, res, next) => {
  // console.log(err)
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, error: err.errors })
  }
  return res.status(500).json({ message: "Неизвестная ошибка сервера." })
}
