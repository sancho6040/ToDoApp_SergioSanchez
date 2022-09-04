import React, { Children } from 'react'

export const AlertError = ({children}) => {
  return (
    <div className='bg-red-500 font-bold uppercase text-center text-white mb-5 rounded-lg'>
        {children}
    </div>
  )
}
