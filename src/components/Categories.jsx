import React from 'react'
import { Productdata } from './productdata'
import { Link } from 'react-router-dom'
export default function Categories() {
  let DistinctCategories=[]
  Productdata.map((product)=>
  {
    if(DistinctCategories.findIndex((c)=>c.category===product.category)==-1)
    {
DistinctCategories.push({category:product.category,
  img:product.thumbnail
})
    }
   
  })
   console.log(DistinctCategories)
   let categryUI= DistinctCategories.map((c)=>
  {
    return <div>
      <Link to={"/AllProducts/"+ c.category}>
      <img src={c.img} className='w-1/4 aspect-square'/>
      <h1>{c.category}</h1>
      </Link>
    </div>
})
  return (
    <div className='flex gap-5 flex-wrap'>{categryUI}</div>
  )
}
