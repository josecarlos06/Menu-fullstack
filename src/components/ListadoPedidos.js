import { formatDinero } from "@/helpers";
import useMenu from "@/hooks/useMenu";
import Image from "next/image"
import Link from "next/link";

const ListadoPedidos = ({producto}) => {
   const {changeResumen,deletePlatillo} = useMenu();
   const {name,price,cantidad,imagen,id} = producto;
  return (
   <div className="bg-white p-3 rounded-lg">
      <figure>
         <Image src={imagen} width={1000} height={1000} alt={`platillo ${name}`} className="h-36 w-full object-cover rounded-lg"/>
      </figure>
      <h2 className="text-3xl font-medium mt-3">{name}</h2>
      <p className="text-3xl py-2 text-amber-500 font-black">Precio: {formatDinero(price * cantidad)}</p>
      <nav className="flex gap-5 mt-5">
         <Link href="/platillo" onClick={()=>changeResumen(id) } className="bg-yellow-400 font-bold text-white px-5 py-3 text-xl rounded w-full text-center">
            Editar
         </Link>
         <button onClick={()=>deletePlatillo(id)} className="bg-red-400 font-bold text-white px-5 py-3 text-xl rounded w-full text-center">
            Eliminar
         </button>
      </nav>
   </div>
  )
}

export default ListadoPedidos
