"use client";

import Image from "next/image";
import { useFormik, FormikHelpers } from "formik";
import LoginFormType from "@/types/constract/login/LoginFormType";
import * as userAuthService from '@/services/models/UserAuthService'

export default function LoginView() {
  // Start Formik
  const onSubmit = (values: LoginFormType, action: FormikHelpers<LoginFormType>) => {
    userAuthService.login(values.username, values.password, () => alert('kullanıcı başarıyla eklendi'), (message) => alert(message))
    
    action.resetForm();
  };

  const initialValues: LoginFormType = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  // End Formik

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg"
            className="mx-auto h-10 w-auto"
            width={50}
            height={50}
            loading="lazy"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Hesabınız ile giriş yapınız
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email / UserName
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Şifre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <div className="text-sm mt-3">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Şifrenizi mi unuttunuz?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Giriş Yap
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Hesabınız yok mu?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Buradan kayıt olun
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
