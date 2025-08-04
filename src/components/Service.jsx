import React from 'react'

export default function Service(props) {

  return (
    <div className='h-45 w-45 border-1 rounded-2xl p-4 text-center'>
        
        <h1 className='text-xl font-bold pb-2'>{props.servicename}</h1>
        <hr />
        <h1 className='text-lg pt-2'>{props.servicedescription}</h1>
    </div>
  )
}

