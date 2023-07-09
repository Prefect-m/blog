import authRouter from "./auth/auth.js"

export const routes = [
  {
    path: "auth",
    handler: authRouter,
  },
]
