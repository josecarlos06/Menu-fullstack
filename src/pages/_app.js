import { MenuProvider } from '@/context/MenuProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <MenuProvider>
         <Component {...pageProps} />
      </MenuProvider>
  )
}
