import Footer from "@/components/Footer";
import ListadoPedidos from "@/components/ListadoPedidos";
import useMenu from "@/hooks/useMenu";
import { useMemo } from "react";

export default function pedido(){
   const {pedido} = useMenu();
 return(
      <main className="container w-11/12 mx-auto mt-5">
         <h1 className="font-black text-3xl">Resumen</h1>
         <p className="text-xl mt-1 mb-5">Verifica tus productos</p>
         <section className="mb-20 grid gap-5">
            {pedido.length === 0 ? (
               <p className="text-xl text-center mt-8 font-bold">No hay productos agregados</p>
            ) : (
               pedido.map(producto=> (
                  <ListadoPedidos 
                     key={producto.id}
                     producto={producto}
                  />
               ))
            )}
         </section>
         <Footer/>
      </main>
   )
}