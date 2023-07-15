import React, { useEffect } from "react"
import { Field } from "../../../components"
import { Link, useNavigate } from "react-router-dom"
import { useActionState } from "../../../hooks/useSelector"
import { useActions } from "../../../hooks/useActions"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export const LoginPage = () => {
  const navigate = useNavigate()
  const { loginUser } = useActions()
  const { auth } = useActionState()

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
      loginUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-1/4 h-60 mx-auto mt-20">
      <h3 className="text-lg text-white text-center">Авторизация</h3>
      <div className="text-sm underline text-right">
        <Link to={"/user/register"}>Регистрация</Link>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-y-6">
          <div className="field flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="username">
              Ваше имя
            </label>
            <Field
              {...register("username", { required: "Имя обязательно" })}
              id="username"
              placeholder="username"
              className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
              error={errors.username}
            />
          </div>
          <div className="field flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="password">
              Пароль
            </label>
            <Field
              {...register("password", { required: "Введите пароль" })}
              type="password"
              id="password"
              placeholder="Пароль"
              className="mt-1 text-black w-full rounded-sm bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-300"
              error={errors.password}
            />
          </div>
          <button className="py-4 px-10 bg-fuchsia-500 text-white rounded-lg hover:opacity-70">
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}
