import { CATEGORY_API_URL } from '@/utils/constant'

interface fetchCategoriesProps {
  token: string
}

export const fetchCategories = async ({ token: bearerToken }: fetchCategoriesProps) => {

  const response = await fetch(CATEGORY_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  })

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  return data.data
}