import React from "react"
import { Field } from "../../../components"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="w-1/4 h-60 mx-auto mt-20">
      <h3 className="text-lg text-white text-center">Авторизация</h3>
      <div className="text-sm underline text-right">
        <Link to={"/user/register"}>Регистрация</Link>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="field flex flex-col gap-y-2">
          <label className="text-sm" htmlFor="email">
            E-mail
          </label>
          <Field
            id="email"
            placeholder="email"
            className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="field flex flex-col gap-y-2">
          <label className="text-sm" htmlFor="password">
            Пароль
          </label>
          <Field
            type="password"
            id="password"
            placeholder="Пароль"
            className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
          />
        </div>
        <button className="py-4 px-10 bg-fuchsia-500 text-white rounded-lg hover:opacity-70">
          Войти
        </button>
      </div>
    </div>
  )
}
