import Image from 'next/image'
import { Inter } from 'next/font/google'
import CategoriesTable from '@/components/CategoriesTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-full w-full text-white`}>
      <CategoriesTable />
    </div>
  )
}
