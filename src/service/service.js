import axios from "axios";

export const getCategory = async () => {
   try{
      const {data} = await axios('/api/category')
      return data;
   }catch(error){
      console.log(error);
   }
}