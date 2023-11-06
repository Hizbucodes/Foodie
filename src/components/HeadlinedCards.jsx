import React from 'react'

const HeadlinedCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 font-medium'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Noodle Delights</p>
                <p className='px-2'>Exploring Global Flavors, One Bowl at a Time</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 font-medium'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 font-medium'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2012/02/28/00/47/berliner-17811_1280.jpg" alt="" />
        </div>
    </div>
  )
}

export default HeadlinedCards