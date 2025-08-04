import React, { useState } from 'react'

export default function Stateinputeg() {
    const [a,seta]= useState(0)
    const [b,setb]= useState(0)
    const [msg,setmsg]=useState("")
    const sum=()=>
    {
       let c = parseInt(a)+parseInt(b)                                               (b);
        setmsg("sum is "+c)

    }
  return (
    <div>
        <p>Enter a : <input type="text" 
        className='border-1 ' onBlur={(e)=>seta(e.target.value)} /></p>
         <p>Enter b : <input type="text" 
        className='border-1 ' onBlur={(e)=>setb(e.target.value)} /></p>
        <input type="button" value="+" onClick={()=>sum()} />
        <p className='bg-orange-400 text-lg
         text-blue-500 font-bold'>{msg}</p>
    </div>
  )
}
