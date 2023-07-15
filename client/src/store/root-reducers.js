import { combineReducers } from "@reduxjs/toolkit"
import { AuthReducers } from "./slices/auth-slice"

export const rootReducers = combineReducers({
  auth: AuthReducers,
})
