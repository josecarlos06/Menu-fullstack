import Image from "next/image";

const OrdenPedido = ({orden}) => {
   const {name, imagen, cantidad} = orden;
  return (
    <li className="flex justify-start items-start flex-col md:flex-row gap-5 border-b w-auto mb-5 last-of-type:mb-0 last-of-type:border-none">
      <figure className="w-32 rounded overflow-hidden">
         <Image src={imagen} width={1000} height={1000} alt={`platillo ${name}`}/>
      </figure>
      <div className="py-1">
         <h3 className="text-2xl text-amber-500 font-black">{name}</h3>
         <h3 className="text-xl font-bold mt-2">Cantidad: {cantidad}</h3>
      </div>
    </li>
  )
}

export default OrdenPedido