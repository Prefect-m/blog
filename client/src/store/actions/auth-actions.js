import { createAsyncThunk } from "@reduxjs/toolkit"
import { authService } from "../../services/auth-service"

export const registerNewUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkApi) => {
    try {
      const { data } = await authService.register(userData)
      if (data.accessToken) {
        window.localStorage.setItem("accessToken", data.accessToken)
      }
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const { data } = await authService.login(userData)
      if (data.accessToken) {
        window.localStorage.setItem("accessToken", data.accessToken)
      }
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data)
    }
  }
)

export const getProfile = createAsyncThunk("auth/profile", async (thunkApi) => {
  try {
    const { data } = await authService.getProfile()
    return data
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data)
  }
})
