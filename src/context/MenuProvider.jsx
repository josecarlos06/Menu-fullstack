import { getCategory } from "@/service/service";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

const MenuContext = createContext();

export const MenuProvider = ({children}) => {
   const [categories, setCategories] = useState([]);
   const [currentCategory, setCurrentCategory] = useState({});
   const [platillo, setPlatillo] = useState({});
   const [pedido, setPedido] = useState([]);
   const [nombre, setNombre] = useState('');
   const [total, setTotal] = useState(0);
   const router = useRouter();
   useEffect(()=>{
      constulApi();
   },[]);

   useEffect(()=>{
      setCurrentCategory(categories[0]);
   },[categories]);
   useEffect(()=>{
      const sumaTotal = pedido.reduce((total, product) => total + (product.price * product.cantidad),0)
      setTotal(sumaTotal)
   },[pedido])

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
   const addPedido = ({categoryId,...objPedido}) =>{
      if(pedido.some( nota => nota.id === objPedido.id )){
         const actPedido = pedido.map(nota => {
            if(nota.id === objPedido.id){
               nota.cantidad = objPedido.cantidad 
            }
            return nota;
         })
         setPedido(actPedido)
         toast.success("Se edito el producto")
      }else{
         setPedido([...pedido, objPedido])
         toast.success("Se agrego correctamente")
      }
   }
   const changeResumen = (id) => {
      const actPlatillo = pedido.filter(platilloState => platilloState.id === id);
      setPlatillo(actPlatillo[0]);
   }
   const deletePlatillo = (id) => {
      const actPlatillo = pedido.filter(platilloState => platilloState.id !== id);
      setPedido(actPlatillo);
   }
   const handleSubmit = async (e) =>{
      e.preventDefault()
      try{
        await axios.post('/api/ordenes',{
            pedido, nombre, total, date : Date.now().toString()
         })
         setCurrentCategory(categories[0]);
         setPlatillo({});
         setPedido([]);
         setNombre('');
         setTotal(0);
         toast.success("Se agrego su pedido");
         setTimeout(()=>{
            router.push('/')
         },2000)
      }catch(error){
         console.log(error);
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
         addPedido,
         changeResumen,
         handleSubmit,
         setNombre,
         nombre,
         total
      }}
   >
      {children}
   </MenuContext.Provider>
  )
}

export default MenuContext;