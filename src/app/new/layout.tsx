import MainLayout from '@/components/Layout'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default AppLayout