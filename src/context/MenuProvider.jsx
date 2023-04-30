import { createContext } from "react"

const MenuContext = createContext();

export const MenuProvider = ({children}) => {
  return (
   <MenuContext.Provider
      value={{}}
   >
      {children}
   </MenuContext.Provider>
  )
}

export default MenuContext;