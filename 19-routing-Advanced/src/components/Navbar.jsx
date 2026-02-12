import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate=useNavigate();
  return (
    <div className="flex bg-fuchsia-700 px-4 py-2 items-center justify-between">

      <button
      className="cursor-pointer"
      onClick={()=>{
        navigate('/')
      }}>
      <h2 className=" leading-none text-xl px-2 py-1 font-extrabold">DELL</h2>
      </button>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>

        {/* <a href="/contact">Contact</a> */}
       <Link to='/product'>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
