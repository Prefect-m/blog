import baseApi from "../api/base-api"

export const authService = {
  async register({ username, email, password }) {
    return await baseApi.post("/auth/registration", {
      username,
      email,
      password,
    })
  },
  async login({ username, password }) {
    return await baseApi.post("/auth/login", {
      username,
      password,
    })
  },
  async getProfile() {
    return await baseApi.get("/auth/profile")
  },
}
