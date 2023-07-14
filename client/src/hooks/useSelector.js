import { useSelector } from "react-redux"

export const useActionState = () => useSelector((state) => state.rootReducers)
