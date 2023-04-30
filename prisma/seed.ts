import { PrismaClient } from "@prisma/client";
import { categories } from "./data/categories";
import { products } from "./data/products";
const prisma = new PrismaClient();

const main = async () =>{
   try{
      await prisma.category.createMany({
         data : categories
      });
      await prisma.product.createMany({
         data : products
      });
   }catch(err){
      console.log(err);
   }
}
main();