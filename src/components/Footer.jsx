import React from 'react'

function Footer() {
  return (
    <div className='flex items-center text-center justify-between bg-gray-700 text-white mt-8 w-full px-16 py-8 border-y border-gray-600'>
       <h1 className='text-4xl font-bold'>📚BookCloud</h1>
       <p className='text-xl font-semibold text-gray-300'> © {new Date().getFullYear()} BookCloud. All rights reserved.</p>
    </div>
  )
}

export default Footer