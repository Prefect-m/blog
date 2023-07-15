import * as registerUser from "./actions/auth-actions"
import { AuthActions } from "./slices/auth-slice"

export const rootActions = {
  ...registerUser,
  ...AuthActions,
}
