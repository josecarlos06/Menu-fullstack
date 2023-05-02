import useMenu from "@/hooks/useMenu";

const Category = ({category}) => {
   const {handleCategory,currentCategory} = useMenu();
   const {name ,id} = category;

  return (
      <button className={`${currentCategory?.id === id ? 'bg-amber-500 text-white text-center' : ''}bg-white text-xl 
      font-black px-4 py-2 rounded-lg shadow cursor-pointer`} 
         onClick={ () => handleCategory(id)}>
         <p>
            {name}
         </p>
      </button>
  )
}

export default Category