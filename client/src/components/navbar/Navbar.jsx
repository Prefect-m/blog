import React from "react"
import { Link, NavLink } from "react-router-dom"
import { useActionState } from "../../hooks/useSelector"
import { useActions } from "../../hooks/useActions"

export const Navbar = () => {
  const { auth } = useActionState()
  const { logout } = useActions()

  const clickHandler = () => {
    logout()
    window.localStorage.removeItem("accessToken")
  }

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
            style={({ isActive }) => {
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
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              }
            }}
          >
            Посты
          </NavLink>
        </li>
        {auth.isAuth && (
          <>
            <li>
              <NavLink
                to="/post/add"
                className="text-xs text-gray-700 hover:text-white"
                style={({ isActive }) => {
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
                style={({ isActive }) => {
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

      <div className="flex justify-center items-center gap-x-3 text-xs text-white rounded-sm ">
        {auth.isAuth && (
          <div className="capitalize flex gap-x-3 items-center">
            Профиль:
            <span className="text-sm underline">{auth.user.username}</span>
          </div>
        )}
        {auth.isAuth ? (
          <button
            onClick={clickHandler}
            className="hover:text-yellow-100 px-4 py-2 bg-gray-600"
          >
            Выйти
          </button>
        ) : (
          <Link
            className="hover:text-yellow-100 px-4 py-2 bg-gray-600"
            to={"/user/login"}
          >
            Войти
          </Link>
        )}
      </div>
    </div>
  )
}
