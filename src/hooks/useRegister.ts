import { useRouter } from 'next/navigation'
import { REGISTER_API_URL } from '@/utils/constant'
import Swal from 'sweetalert2'

interface RegisterPayload {
  name: string
  email: string
  password: string
}

const useRegister = (loginPath: string) => {
  const router = useRouter()
  const handleRegister = async (payload: RegisterPayload) => {
    const response = await fetch(REGISTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    console.log(data)

    await Swal.fire({
      icon: 'success',
      title: 'Register Success',
      text: 'You can login now'
    })

    router.push(loginPath)
  }

  return {
    triggerRegister: handleRegister
  }
}

export default useRegister
