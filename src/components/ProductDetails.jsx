import React from 'react'
import { useParams } from 'react-router-dom'
import { Productdata } from './productdata'
import Imagebox from './Imagebox'
export default function ProductDetails() {
    let params = useParams()
    let id = params.id
    let product = Productdata.find((p)=>p.id ==id)
    console.log(product)
  return (
    <div className=' grid grid-cols-2 gap-20 py-10 '>
        <div className='w-3/5 mx-auto'>
            {/* <img src={product.thumbnail} alt="Image not found" className='w-full h-full border-1'/> */}
            <Imagebox imgs={product.images}></Imagebox>
          </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl'>{product.name}</h1>
            <p className='text-lg '>{product.description}</p>
            <p className='text-xl'>{product.category} | {product.company}</p>
            <p className='text-xl'><del>rs: {product.price}</del> rs:{product.discounted_price}</p>
            <h1 className='text-blue-500 font-bold text-xl'>Features: 
                </h1>
                <ul className='list-disc pl-6'>
                    {(product.features).map((f)=><li>{f}</li>)}
                </ul>
            
        </div>
    </div>
  )
}
