import { createSlice } from "@reduxjs/toolkit"
import {
  getProfile,
  loginUser,
  registerNewUser,
} from "../actions/auth/auth-action"

const initialSlice = {
  user: null,
  accessToken: null,
  isLoading: false,
  status: null,
  isAuth: false,
}
export const authSlice = createSlice({
  name: "auth",
  initialState: initialSlice,
  reducers: {
    logout: (state) => {
      state.accessToken = null
      state.isAuth = false
      state.user = null
      state.status = null
      state.isLoading = null
    },
  },
  extraReducers: (build) => {
    build
      // REGISTER
      .addCase(registerNewUser.pending, (state) => {
        state.isLoading = true
        state.status = null
        state.isAuth = false
      })
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = payload.user
        state.accessToken = payload.accessToken
        state.isAuth = true
      })
      .addCase(registerNewUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = null
        state.accessToken = null
        state.isAuth = false
      })
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = false
        state.status = null
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = payload.user
        state.accessToken = payload.accessToken
        state.isAuth = true
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = null
        state.accessToken = null
        state.isAuth = false
      })
      // Get profile
      .addCase(getProfile.pending, (state) => {
        state.isLoading = false
        state.status = null
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = null
        state.user = payload.userData
        state.accessToken = null
        state.isAuth = true
      })
      .addCase(getProfile.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = null
        state.accessToken = null
        state.isAuth = false
      })
  },
})

export const AuthReducers = authSlice.reducer
export const AuthActions = authSlice.actions
