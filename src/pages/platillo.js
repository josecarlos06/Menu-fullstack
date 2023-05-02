import Footer from "@/components/Footer"
import { formatDinero } from "@/helpers";
import useMenu from "@/hooks/useMenu"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const platillo = () => {
   const router = useRouter();
   const { platillo,pedido,addPedido } = useMenu();
   const [cantidad, setCantidad] = useState(1)
   const { name, description, price, imagen,id} = platillo;

   useEffect(()=>{
      if(!name){
         router.push('/')
         return;
      }
   },[])
   useEffect(()=>{
      if(pedido.some(pedidoState => pedidoState.id === id )){
         const cantidadPedidos = pedido.find( pedidoState => pedidoState.id === id );
         setCantidad(cantidadPedidos.cantidad)
      }
   },[pedido]);
   return (
      <>
         <main className="mb-20">
            <figure>
               <Image src={imagen} width={1000} height={1000} className="w-full h-80 object-cover" alt="menu" />
            </figure>
            <section className="container w-11/12 mx-auto">
               <h2 className="text-4xl font-bold mt-5">{name}</h2>
               <p className="paragraph text-slate-600 my-3">{description}</p>
               <nav className="flex justify-between items-center">
                  <p className="text-4xl font-black">{formatDinero(price * cantidad || 0)}</p>
                  <div className="flex items-center gap-5 bg-amber-500 text-white rounded-lg shadow-lg">
                     <button
                        className="px-3 py-2"
                        onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)}>
                        <span className="text-4xl"> &minus; </span>
                     </button>
                     <span className="text-3xl font-black ">{cantidad}</span>
                     <button
                        className="px-3 py-2"
                        onClick={() => setCantidad(cantidad < 7 ? cantidad + 1 : cantidad)}>
                        <span className="text-4xl"> + </span>
                     </button>
                  </div>
               </nav>
               <button 
                  className="w-full bg-amber-500 transition hover:bg-amber-600 text-2xl p-3
                   text-white font-black mt-5 rounded-lg" 
                  onClick={()=>addPedido({...platillo, cantidad})} >Agregar Orden</button>
            </section>

         </main>
         <ToastContainer></ToastContainer>
         <Footer />
      </>
   )
}

export default platillo