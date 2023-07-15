import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "./components"
import {
  AddPostPage,
  EditPostPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  PostPage,
  PostsPage,
  RegisterPage,
} from "./pages"
import { useActions } from "./hooks/useActions"
import { ToastContainer } from "react-toastify"
import { useActionState } from "./hooks/useSelector"

const App = () => {
  const location = useLocation()
  const { auth } = useActionState()

  const { getProfile } = useActions()

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      getProfile()
    }
  }, [])

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="post/add" element={<AddPostPage />} />
          <Route path="post/edit/:id" element={<EditPostPage />} />
          <Route path="user/login" element={<LoginPage />} />
          <Route path="user/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
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

export default App
