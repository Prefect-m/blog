import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
