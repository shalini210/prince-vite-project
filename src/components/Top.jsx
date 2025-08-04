import React from 'react'

export default function Top(props) {
    let cname = props.cname;
    let quote = props.quote
  return (
    <div>
        <h1 className='text-4xl text-center
         text-purple-600
         '>{cname}</h1>
         <h2 className='text-2xl text-center'>{quote}</h2>
    </div>
  )
}
