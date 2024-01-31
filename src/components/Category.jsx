import React from 'react'
import {categories} from '../data/data';

const Category = () => {

  return (
    <div className='max-w-[1536px] px-4 py-12 m-auto '>
        <h1 className='text-yellow-300 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6  '>
            {categories.map((item, index)=>(
                <div key={index} className='border p-2 rounded-xl  flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category