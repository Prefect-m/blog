import { combineReducers } from "@reduxjs/toolkit"
import { AuthReducers } from "./api/slice/auth-slice"

export const rootReducers = combineReducers({
  auth: AuthReducers,
})
