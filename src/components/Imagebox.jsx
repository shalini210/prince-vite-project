import React, { useRef } from 'react'

export default function Imagebox(props) {
    let mainImg = useRef()
    let imgs = props.imgs;
    
    let smallimgs  = imgs.map((i)=><img src={i} onClick={(e)=>{mainImg.current.src=i}}
     className='w-14 aspect-square' />)

  return (
    <div className='w-full  items-center
     content-center flex flex-col'>
        <div className='w-full'>
        <img className='w-full aspect-square' src={imgs[0]} ref={mainImg}/>
        </div>
        <div className='flex gap-2 m-2'>
    {smallimgs}        
        </div>
    </div>
  )
}
