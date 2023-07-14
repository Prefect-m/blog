import { createSlice } from "@reduxjs/toolkit"
import { registerNewUser } from "../actions/auth/auth-action"

const initialSlice = {
  user: null,
  accessToken: null,
  isLoading: false,
  status: null,
}
export const authSlice = createSlice({
  name: "auth",
  initialState: initialSlice,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(registerNewUser.pending, (state) => {
        state.isLoading = true
        state.status = null
      })
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = payload
        state.accessToken = payload
      })
      .addCase(registerNewUser.rejected, (state, { payload }) => {
        state.isLoading = false
        state.status = payload.message
        state.user = null
        state.accessToken = null
      })
  },
})

export default authSlice.reducer
