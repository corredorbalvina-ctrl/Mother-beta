import React from 'react'

export default function Button({text, funcionalidad}) 
{
  return (
    <div>
      <button className='bg-red-600 text-2xl text-white p-4 m-2 rounded-lg' onClick={() => funcionalidad()}> {text}</button>
    </div>
  )
}
