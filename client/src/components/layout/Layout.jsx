import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
