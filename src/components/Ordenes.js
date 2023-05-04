import { formatDinero } from "@/helpers";
import OrdenPedido from "./OrdenPedido";

const Ordenes = ({orden}) => {
   const {id, total, pedido,nombre, estado} = orden;
   const completarOrden = ()=>{
      console.log("object");
   }
  return (
    <div className="border p-10 shadow mb-5 last-of-type:mb-0 rounded">
      <h3 className="font-black text-3xl">Orden {id}</h3>
      <p className="text-xl mt-1 mb-5 font-bold">Cliente: {nombre} </p>
      <ul>
         {pedido.map( orden => (
            <OrdenPedido 
               key={orden.id}
               orden = {orden}
            />
         ))}
      </ul>
      <div className="flex justify-between items-center flex-wrap gap-5">
         <p className="text-4xl my-5 font-black text-amber-500">Total a pagar: {formatDinero(total)} </p>
         <button 
            type="button" className="bg-green-500 text-white px-5 py-2 rounded"
            onClick={completarOrden}         
         >Cerrar Orden</button>
      </div>

   </div>
  )
}

export default Ordenes