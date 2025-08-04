import React, { useState } from 'react'
import Stateinputeg from './Stateinputeg'
export default function Stateeg() {
    // let count = 0 
    const [count,setcount]= useState(0)
    let increment = ()=>
    {
        // count++; count=count+1
        setcount(count+1)
        console.log(count)
    }
  return (
    <>
    <div>count : {count} 
    <input type="button" value="+" onClick={()=>increment()}/> </div>
    <h1>Below is second eg of state</h1>
    <Stateinputeg></Stateinputeg>
    </>
  )
}
