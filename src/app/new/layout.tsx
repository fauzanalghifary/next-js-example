'use client'
import MainLayout from '@/components/Layout'
import { TokenContextProvider } from '@/context/TokenContextProvider'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <TokenContextProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </TokenContextProvider>
  )
}

export default AppLayout