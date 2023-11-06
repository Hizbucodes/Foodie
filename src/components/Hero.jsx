import React from 'react'
import heroImage from '../assets/burger-2041192.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='rounded-3xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-300'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-300'>Foods<span className='text-white'> Delivered</span></h1>
            </div>
            <img className='max-h-[500px] w-full object-cover rounded-3xl' src={heroImage} alt="heroImage" />
        </div>
    </div>
  )
}

export default Hero