export class AppError extends Error {
  statusCode
  errors

  constructor(message, statusCode, errors = []) {
    super(message)
    this.statusCode = statusCode
    this.errors = errors
  }

  static UnauthorizeError() {
    return new AppError("Пользователь не авторизован", 401)
  }

  static BadRequest(message, errors = []) {
    return new AppError(message, 400, errors)
  }
}
