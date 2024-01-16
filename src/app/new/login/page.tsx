import LoginComponent from '@/components/Login'

const NewLoginPage = () => {
  return (
    <LoginComponent registerPath={'/new/register'} homePath={'/new'} />
  )
}

export default NewLoginPage