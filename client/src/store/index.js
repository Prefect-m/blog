import { configureStore } from "@reduxjs/toolkit"
import { rootReducers } from "./root-reducers"

export const store = configureStore({
  reducer: { rootReducers },
})
