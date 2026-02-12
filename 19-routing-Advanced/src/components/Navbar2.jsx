import React from "react";
import { RiArrowLeftLongLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let nav = useNavigate();

  return (
    <div className="px-5 py-4 ">
     <button 
     className="cursor-pointer active:scale-90"
     onClick={()=>{
      nav(-1)
     }} > <RiArrowLeftLongLine size={48} /></button>

     <button 
     className="bg-amber-400 rounded-2xl leading-none p-2 ml-3.5 absolute top-17 cursor-pointer active:scale-95 "
     onClick={()=>{
      nav('/')
     }}
     >Go Back to Home</button>
    </div>
  );
};

export default Navbar2;
