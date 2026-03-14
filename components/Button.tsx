"use client"
import React,{useContext} from "react"
import {ButtonContext} from "../context/donate.tsx"
const Button = ({state}) => {
  const {active,setActive} = useContext(ButtonContext)
  return (
          <button onClick={()=>{
          window.scrollTo(0, 0);
          setActive(!active)}} className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-full transition-all duration-700 tracking-wide">
            Donate Now
          </button>
    )
};
export default Button;