import LoginComponent from '@/components/Login'

const LoginPage = () => {
  return (
    <LoginComponent registerPath={'/register'} homePath={'/'} />
  )
}

export default LoginPage
