import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex  justify-center gap-7 p-4 '>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        {/* <h1>Product Page</h1> */}
        <Outlet />
    </div>
  )
}

export default Product