import React, { useEffect } from "react"
import { Field } from "../../../components"
import { Link, useNavigate } from "react-router-dom"
import { useAppActions } from "../../../hooks/useAppActions"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export const Register = () => {
  const navigate = useNavigate()
  const { registerNewUser } = useAppActions()
  const { auth } = useAppSelector()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  useEffect(() => {
    if (auth.status) toast(auth.status)
    if (auth.isAuth) navigate("/")
  }, [auth.status, auth.isAuth, navigate])

  const submitHandler = async (data) => {
    try {
      registerNewUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-1/4 h-60 mx-auto mt-20">
      <h3 className="text-lg text-white text-center">Регистрация</h3>
      <div className="text-sm underline text-right">
        <Link to={"/auth/login"}>Войти</Link>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-y-6">
          <div className="field flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="login">
              Логин
            </label>
            <Field
              {...register("username", { required: "Имя обязательно" })}
              id="login"
              placeholder="Логин"
              className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
              error={errors.username}
            />
          </div>
          <div className="field flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="email">
              E-mail
            </label>
            <Field
              {...register("email", { required: "E-mail обязателен" })}
              id="email"
              placeholder="email"
              className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
              error={errors.email}
            />
          </div>
          <div className="field flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="password">
              Пароль
            </label>
            <Field
              {...register("password", { required: "Пароль обязятелен" })}
              type="password"
              id="password"
              placeholder="Пароль"
              className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
              error={errors.password}
            />
          </div>
          <button
            disabled={auth.isLoading}
            className="py-4 px-10 bg-fuchsia-500 text-white rounded-lg hover:opacity-70 disabled:cursor-not-allowed"
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  )
}
