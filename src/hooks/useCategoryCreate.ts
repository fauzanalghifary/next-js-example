import { CATEGORY_API_URL, TOKEN_KEY } from '@/utils/constant'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

interface CreateCategoryPayload {
  name: string
  is_active: boolean
}

const useCategoryCreate = () => {
  const router = useRouter()

  const handleCreate = async (payload: CreateCategoryPayload) => {
    try {
      const response = await fetch(`${CATEGORY_API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('something went wrong')
      }

      await Swal.fire({
        icon: 'success',
        title: 'New category created'
      })
      router.push('/')
    } catch (error) {
      console.log(error)
      await Swal.fire({
        icon: 'error',
        title: 'Create category failed'
      })
    }
  }

  return {
    triggerCreate: handleCreate
  }
}

export default useCategoryCreate
