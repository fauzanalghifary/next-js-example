'use client'

import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useLogin from '@/hooks/useLogin'

export interface LoginComponentProps {
  registerPath: string
  homePath: string
}

const LoginComponent = ({ registerPath, homePath }: LoginComponentProps) => {
  const { triggerLogin } = useLogin(homePath)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required')
    }),
    onSubmit: async (_, { resetForm }) => {
      await triggerLogin(formik.values)
      resetForm()
    }
  })

  return (
    <div className={`w-full text-white`}>
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit} data-testid={'login-form'}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  data-testid={'email-input'}
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 p-2.5 text-white
                  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
              {formik.errors.email ? (
                <div className={`mt-2 text-red-300`} data-testid={'email-error-message'}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  data-testid={'password-input'}
                  {...formik.getFieldProps('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white/5 p-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
              {formik.errors.password ? (
                <div className={`mt-2 text-red-300`} data-testid={'password-error-message'}>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div>
              <button
                data-testid={'login-button'}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?{' '}
            <Link
              href={registerPath}
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              data-testid={'register-link'}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
