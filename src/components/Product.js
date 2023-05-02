import { formatDinero } from "@/helpers";
import useMenu from "@/hooks/useMenu";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
   const {handlePlatillo} = useMenu();
   const { name, description, price, imagen} = product;
   return (
      <div className="bg-white p-3 rounded flex flex-col shadow">
         <figure>
            <Image src={imagen} width={1000} height={1000} className="w-full h-72 object-cover rounded-sm" alt="menu"/>
         </figure>
         
         <h2 className="text-2xl font-bold mt-3">{name}</h2>
         <p className="paragraph text-slate-600 my-3">{description}</p>

         <nav className="flex justify-between items-center mt-auto">
            <p className="text-4xl font-black mt-auto">{formatDinero(price)}</p>
            <Link href={`/platillo`} className="bg-amber-500 rounded-full transition hover:first-of-type:rotate-45" onClick={ () => handlePlatillo(product)}>
               <Image src="/assets/icons/add.svg" width={45} height={45} alt="add" className="text-2xl"/>
            </Link>
         </nav>
      </div>
   )
}

export default Product