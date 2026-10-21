import React from 'react'

export default function Button({text, funcionalidad}) 
{
  return (
    <div>
      <button className='bg-yellow-400 text-2xl text-black
     p-4 m-2 rounded-lg' onClick={() => funcionalidad()}> {text}</button>
    </div>
  )
}
