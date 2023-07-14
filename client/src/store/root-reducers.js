import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./api/slice/auth-slice"

export const rootReducers = combineReducers({
  auth: authSlice,
})
