import React from "react"
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

const App = () => {
  const location = useLocation()

  return (
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
  )
}

export default App
