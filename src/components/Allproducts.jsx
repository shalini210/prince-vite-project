import React from 'react'
import { Productdata } from './productdata'
import { Link, useParams } from 'react-router-dom'
export default function Allproducts() {
  let params = useParams()
  let categoryname = params.categoryname
  let productUI ={}
  if(categoryname!=undefined)
  {
    console.log("came by category")
    let categoryWiseDataAry = Productdata.filter((p)=>p.category==categoryname)
  productUI=     categoryWiseDataAry.map((product)=>
    {
        return <div>
            <img src={product.thumbnail}></img>
            <p>{product.name}</p>
            <p><del className='text-red-500'>Rs:{product.price}</del>
            <span className='text-blue-600 font-bold'> Rs:{product.discounted_price}</span></p>
            <Link to={"/ProductDetails/"+product.id} className='text-blue-500 underline'>View Details</Link>
        </div>
    })   
  }
  else
  {
    console.log("came by all products")
  productUI=     Productdata.map((product)=>
    {
        return <div>
            <img src={product.thumbnail}></img>
            <p>{product.name}</p>
            <p><del className='text-red-500'>Rs:{product.price}</del>
            <span className='text-blue-600 font-bold'> Rs:{product.discounted_price}</span></p>
            <Link to={"/ProductDetails/"+product.id} className='text-blue-500 underline'>View Details</Link>
        </div>
    })
  }
  
  return (
    <div className='flex gap-2 flex-wrap '>
        {productUI}
    </div>
  )
}
