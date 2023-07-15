import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Layout } from "./layout/Layout"
import { Home, Post, Posts, Login, Register, NotFound } from "./pages"
import { useAppActions } from "./hooks/useAppActions"

export const App = () => {
  const { getProfile } = useAppActions()

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      getProfile()
    }
    // eslint-disable-next-line
  }, [window])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        className="text-xs"
        position="bottom-right"
        theme="dark"
        autoClose={2000}
      />
    </>
  )
}
