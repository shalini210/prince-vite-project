import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-20 flex justify-center gap-4 items-center bg-black text-white'>
        <Link to="/stateeg">State example</Link>
        <Link to="/service">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/AllProducts">All Products</Link>
    </div>
  )
}
