import axios from "axios"

const baseApi = axios.create({
  baseURL: "http://localhost:5000/api",
})

baseApi.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token")
  return config
})

export default baseApi
