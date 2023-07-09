import { Router } from "express"
import { routes } from "./routes.js"

const router = Router()

routes.forEach((r) => {
  router.use(`/${r.path}`, r.handler)
})
export default router
