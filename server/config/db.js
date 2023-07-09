import mongoose from "mongoose"

export const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_URI)
      .then((conn) => {
        console.log(
          `database successful connected on host ${conn.connection.host}`
        )
      })
      .catch((err) => {
        ;`database error connection. Error with ${err}`
      })
  } catch (e) {
    console.log(e)
  }
}
