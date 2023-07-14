import React from "react"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Navbar } from "../"
import "react-toastify/dist/ReactToastify.css"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  )
}
