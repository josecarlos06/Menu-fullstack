import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <nav className="flex bg-slate-950 fixed bottom-3 right-0 left-0 w-11/12 mx-auto rounded-lg px-5 py-2 justify-between">
      <Link href="/" className="text-white flex flex-col items-center">
         <Image src="/assets/icons/home.svg" width={20} height={20} alt="home"/>
         <span>Inicio</span>
      </Link>
      <Link href="/" className="text-white flex flex-col items-center">
         <Image src="/assets/icons/heart.svg" width={20} height={20} alt="home"/>
         <span>Me gusta</span>
      </Link>
      <Link href="/" className="text-white flex flex-col items-center">
         <Image src="/assets/icons/shop.svg" width={20} height={20} alt="home"/>
         <span>Articulos</span>
      </Link>
    </nav>
  )
}

export default Footer