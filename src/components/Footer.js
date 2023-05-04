import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
   const router = useRouter();
   const calculPedido = () => {
      let valor = 0
      if(router.pathname === '/' || router.pathname === '/platillo' ){
         valor = 5
      }
      else if(router.pathname === '/pedido'){
         valor = 50
      }else{
         valor=100;
      }

      return valor
   }
  return (
   <>
    <section className=" bg-slate-950 fixed bottom-1 right-0 left-0 w-11/12 
    mx-auto rounded-lg">
    <div className="p-0.5 bg-amber-500 rounded-t-full" style={{width: `${calculPedido()}%`}} ></div>
      <nav className="flex justify-between px-5 py-2">
         <Link href="/" className="text-white flex flex-col items-center">
            <Image src="/assets/icons/home.svg" width={20} height={20} alt="home"/>
            <span>Inicio</span>
         </Link>
         <Link href="/pedido" className="text-white flex flex-col items-center">
            <Image src="/assets/icons/heart.svg" width={20} height={20} alt="home"/>
            <span>Resumen</span>
         </Link>
         <Link href="/orden" className="text-white flex flex-col items-center">
            <Image src="/assets/icons/shop.svg" width={20} height={20} alt="home"/>
            <span>Total</span>
         </Link>
      </nav>
    </section>
   </>
  )
}

export default Footer