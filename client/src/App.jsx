import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "./components"
import { AddPostPage, EditPostPage, HomePage, PostPage } from "./pages"

const App = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/addpost" element={<AddPostPage />} />
        <Route path="/editpost" element={<EditPostPage />} />
      </Route>
    </Routes>
  )
}

export default App
