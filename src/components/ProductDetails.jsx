import React from 'react'
import { useParams } from 'react-router-dom'
import { Productdata } from './productdata'
export default function ProductDetails() {
    let params = useParams()
    let id = params.id
    let product = Productdata.find((p)=>p.id ==id)
    console.log(product)
  return (
    <div>ProductDetails:  {id}</div>
  )
}
