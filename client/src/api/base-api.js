import axios from "axios"

export const APP_HOST = "http://localhost:5000/api"
const baseApi = axios.create({
  baseURL: APP_HOST,
})

baseApi.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("accessToken")
  return config
})

export default baseApi
