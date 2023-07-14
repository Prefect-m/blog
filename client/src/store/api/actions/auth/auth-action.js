import { createAsyncThunk } from "@reduxjs/toolkit"
import baseApi from "../../../../api/base-api"

export const registerNewUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, email, password }, thunkApi) => {
    try {
      const { data } = await baseApi.post("/auth/registration", {
        username,
        email,
        password,
      })
      // if (data.accessToken) {
      // window.localStorage.setItem('accessToken', accessToken)
      // }
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data)
      // console.log(err.response.data)
    }
  }
)
