import Image from 'next/image'
import { Inter } from 'next/font/google'
import CategoriesTable from '@/components/CategoriesTable'
import useCategoriesGet from '@/hooks/useCategoriesGet'
import { fetchCategories } from '@/hooks/fetchCategories'
import { Category } from '@/interfaces/category'
import Cookies from 'universal-cookie'
import { TOKEN_KEY } from '@/utils/constant'
import type { NextApiRequest, NextApiResponse } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  categories: Category[]
}

export default function Home({ categories }: HomeProps) {
  console.log(categories)
  return (
    <div className={`h-full w-full text-white`}>
      <CategoriesTable categories={categories} />
    </div>
  )
}

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const cookies = new Cookies(req.headers.cookie)
  const token = cookies.get(TOKEN_KEY)
  const data = await fetchCategories({ token })

  return {
    props: {
      categories: data
    }
  }
}
