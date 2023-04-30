import MenuContext from "@/context/MenuProvider";
import { useContext } from "react";

const useMenu = () => {
  return useContext(MenuContext);
}

export default useMenu;