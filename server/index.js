import express from "express"
import dotEnv from "dotenv"
import cors from "cors"
import { dbConnect } from "./config/db.js"
import router from "./routes/index.js"

dotEnv.config()
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// ROUTES
app.use("/api", router)

const start = async () => {
  try {
    await dbConnect()
    app.listen(process.env.APP_PORT || 5100, () =>
      console.log(`Server has been started on Port ${process.env.APP_PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()
