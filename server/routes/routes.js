import authRouter from "./auth/auth.js"
import postsRouter from "./post/post.js"

export const routes = [
  {
    path: "auth",
    handler: authRouter,
  },
  {
    path: "posts",
    handler: postsRouter,
  },
]
