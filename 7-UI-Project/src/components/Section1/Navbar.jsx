import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-6'>
        <h4 className='bg-black text-white px-5 py-3 uppercase 
        rounded-full text-xs'>Target Audience</h4>

        <button className='bg-gray-300 px-5 py-3 uppercase 
        rounded-full tracking-widest text-xs'>Digital Banking Platform </button>
    </div>
  )
}

export default Navbar