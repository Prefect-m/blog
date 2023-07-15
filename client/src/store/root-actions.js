import * as registerUser from "./api/actions/auth/auth-action"
import { AuthActions } from "./api/slice/auth-slice"

export const rootActions = {
  ...registerUser,
  ...AuthActions,
}
