import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Head from "next/head"

const Layout = ({children,title}) => {
  return (
   <>
      <Head>
         <title>{title}</title>
      </Head>
      <Navbar/>
      <main className="container w-11/12 mx-auto">
         {children}
      </main>
      <Footer/>
   </>
  )
}

export default Layout