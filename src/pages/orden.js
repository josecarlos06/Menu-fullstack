import Footer from "@/components/Footer";
import useMenu from "@/hooks/useMenu";
import { useCallback, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export default function Orden(){
   const {pedido,handleSubmit,setNombre, nombre, total} = useMenu();

   const confirmPedido = useCallback(()=>{
      return pedido.length === 0 || nombre === '';
   },[pedido,nombre]);

   useEffect(()=>{
      confirmPedido()
   },[pedido, confirmPedido]);

   return(
      <main className="container w-11/12 mx-auto mt-5">
         <h1 className="font-black text-3xl">Total y confirma tu pedido</h1>
         <p className="text-xl mt-1 mb-5">Confirma tu pedido</p>
         <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
               <label htmlFor="nombre" className="text-xl font-bold">Nombre: </label>
               <input type="text" 
                  name="nombre" id="nombre" 
                  className="px-5 py-3 rounded" 
                  value={nombre}
                  onChange={e=>setNombre(e.target.value)}/>
            </div>
            <div className="mt-5">
               <p className="text-2xl font-bold">Total a pagar : ${total}</p>
            </div>
            <input type="submit" value="Confirmar pedido" 
               className={`${confirmPedido() ? 'bg-gray-500' : 'bg-amber-500 ' } text-white w-full mt-5 rounded text-2xl px-5 py-2` }
               disabled={confirmPedido()} />
         </form>         
         <Footer/>
         <ToastContainer></ToastContainer>
      </main>
   )
}