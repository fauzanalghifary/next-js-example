import Header from '@/components/Header'
import React from 'react'
import '@/styles/globals.css'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-full bg-primary-dark">
      <Header />
      <main className="mx-auto flex h-[calc(100vh-80px)] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 mt-4 flex w-full max-w-7xl flex-col items-center justify-between self-center rounded-md px-6 py-6 shadow-md shadow-secondary-dark sm:px-6 lg:mt-8 lg:px-8`}
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout
