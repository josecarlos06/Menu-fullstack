import useMenu from "@/hooks/useMenu";
import Category from "./Category";

const Navbar = () => {
   const {categories} = useMenu();
  return (
      <nav className="container w-11/12 mx-auto flex gap-2 mt-5">
            {categories?.map(category=> (
               <Category key={category.id} category={category}/>
            ))}
      </nav>
  )
}

export default Navbar