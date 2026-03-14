"use client"
import React, {useState,createContext} from "react"
export const ButtonContext = createContext(null)
const ContextProvider=({children})=>{
  const [active,setActive] = useState(false)
  return(
     <ButtonContext.Provider value={{active,setActive}}>
    {children}
  </ButtonContext.Provider>
)}

export default ContextProvider