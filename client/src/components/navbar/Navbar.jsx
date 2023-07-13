import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  const isAuth = false

  return (
    <div className="flex py-4 justify-between items-center px-10">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-400 text-xs text-white rounded-sm">
        E
      </span>

      <ul className="flex gap-8">
        <li>
          <NavLink
            className="text-xs text-gray-700 hover:text-white"
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              }
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className="text-xs text-gray-700 hover:text-white"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              }
            }}
          >
            Посты
          </NavLink>
        </li>
        {isAuth && (
          <>
            <li>
              <NavLink
                to="/post/add"
                className="text-xs text-gray-700 hover:text-white"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                  }
                }}
              >
                Добавить пост
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/posts"
                className="text-xs text-gray-700 hover:text-white"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                  }
                }}
              >
                Мои посты
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? (
          <button className="hover:text-yellow-100">Выйти</button>
        ) : (
          <Link to={"/user/login"}>Войти</Link>
        )}
      </div>
    </div>
  )
}
