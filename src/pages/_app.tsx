import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/Layout'
import { TokenContextProvider } from '@/context/TokenContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TokenContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </TokenContextProvider>
  )
}
