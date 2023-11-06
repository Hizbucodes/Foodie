import React, { useState } from 'react'
import {data} from '../data/data';



const Food = () => {
    
    const[foods, setFoods] = useState(data);


    // filter type burger/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item)=>(
                 item.category === category
            ))
        )
    }


    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=>(
                 item.price === price
            ))
        )
    }


  

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 '>
        <h1 className='text-yellow-300 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold '>Filter Type</p>
                <div className='grid grid-cols-3 gap-4 md:grid-cols-5 pt-2 filter-type'>

                    <button onClick={()=> setFoods(data)} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>All</button>
                    <button onClick={()=>filterType('burger')} className='border rounded-xl w-24 font-semibold p-2 hover:bg-yellow-300 duration-300'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>Chicken</button>

                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className=' font-bold mt-4 md:mt-0'>Filter Price</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 filter-price'>
                    <button onClick={()=> filterPrice(50)} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>$50</button>
                    <button onClick={()=> filterPrice(100)} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>$100</button>
                    <button onClick={()=> filterPrice(500)} className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>$500</button>
                    <button onClick={()=> filterPrice(1000)}  className='border rounded-xl w-24 p-2 font-semibold hover:bg-yellow-300 duration-300'>$1000</button>
                </div>
            </div>
        </div>
        {/* Display Foods */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item)=>(
                <div key={item.id} className='overflow-hidden border shadow-lg  rounded-3xl relative'>               
                    <img className='hover:scale-105 duration-300 w-full h-[200px] object-cover rounded-t-3xl hover:cursor-pointer' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4 flex-col space-y-4 sm:flex-row items-center '>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-yellow-300 text-black p-1 rounded-full px-8 font-semibold'>${item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food