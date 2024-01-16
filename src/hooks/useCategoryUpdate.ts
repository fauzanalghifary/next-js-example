import { CATEGORY_API_URL, TOKEN_KEY } from '@/utils/constant'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

interface UpdateCategoryPayload {
  id: string
  name: string
  is_active: boolean
}

const useCategoryUpdate = () => {
  const router = useRouter()
  const handleUpdate = async (payload: UpdateCategoryPayload) => {
    try {
      const response = await fetch(`${CATEGORY_API_URL}/update`, {
        method: 'PUT',
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
        title: 'edit category success'
      })
      router.push('/')
    } catch (error) {
      console.log(error)
      await Swal.fire({
        icon: 'error',
        title: 'edit category failed'
      })
    }
  }

  return {
    triggerUpdate: handleUpdate
  }
}

export default useCategoryUpdate
