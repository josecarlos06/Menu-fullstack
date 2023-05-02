import { getCategory } from "@/service/service";
import { createContext, useEffect, useState } from "react"

const MenuContext = createContext();

export const MenuProvider = ({children}) => {
   const [categories, setCategories] = useState([]);
   const [currentCategory, setCurrentCategory] = useState({});
   const [platillo, setPlatillo] = useState({});
   const [pedido, setPedido] = useState([]);
   useEffect(()=>{
      constulApi();
   },[]);

   useEffect(()=>{
      setCurrentCategory(categories[0]);
   },[categories]);

   const constulApi = async () => {
      const data = await getCategory();
      setCategories(data)
   };
   const handleCategory = (id) => {
      const category = categories.filter(category => category.id === id)
      setCurrentCategory(category[0])
   }
   const handlePlatillo = (objPlatillo) => {
      setPlatillo(objPlatillo);
   }
   const addPedido = ({categoryId,imagen,...objPedido}) =>{
      if(pedido.some( nota => nota.id === objPedido.id )){
         const actPedido = pedido.map(nota => {
            if(nota.id === objPedido.id){
               nota.cantidad = objPedido.cantidad 
            }
            return nota;
         })
         setPedido(actPedido)
      }else{
         setPedido([...pedido, objPedido])
      }
   }
  return (
   <MenuContext.Provider
      value={{
         categories,
         handleCategory,
         currentCategory,
         handlePlatillo,
         platillo,
         pedido,
         addPedido
      }}
   >
      {children}
   </MenuContext.Provider>
  )
}

export default MenuContext;