import CategoriesTable from '@/components/CategoriesTable'
import { cookies } from 'next/headers'
import { TOKEN_KEY } from '@/utils/constant'
import { fetchCategories } from '@/hooks/fetchCategories'

const NewHomePage = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get(TOKEN_KEY)?.value ?? ''
  const categories = await fetchCategories({ token })

  return (
    <div className={`h-full w-full text-white`}>
      <CategoriesTable categories={categories} newCategoryPath={'/new/new-category'}
                       editCategoryPath={'/new/edit-category'} />
    </div>
  )
}

export default NewHomePage