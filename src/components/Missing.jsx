import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='max-w-screen mx-auto px-6 flex justify-center items-center h-screen bg-gray-800'>
        <div className='flex flex-col gap-8 text-center'>
        <h1 className='text-4xl font-bold text-white'>
            Something Went Wrong...
        </h1>
        <p className='text-3xl text-white'>
            visit our <Link className='text-yellow-300' to="/">Official Page</Link>
        </p>
        </div>
    </div>
  )
}

export default Missing