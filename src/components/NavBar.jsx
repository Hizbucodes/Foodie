import React, {useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {Link} from "react-router-dom"


const NavBar = () => {


    const[nav, setNav] = useState(false);
    
  return (
    <div className='max-w-[1536px] mx-auto flex justify-between items-center p-4'>
    {/* {left side} */}
    <div className='flex items-center'>
    <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu size={30}/>
    </div>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Foodie</h1>
    <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
    </div>
    </div>

    {/* Search Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods'/>
    </div>
    {/* Cart button */}
    <Link to="/cart">
        <button className='bg-black rounded-full w-[5rem] text-white hidden sm:flex items-center py-2 relative px-4'>
            <BsFillCartFill size={20} className='mr-2'/>
            <span className='absolute bg-yellow-300 rounded-full px-3 -right-4 -top-2 text-black font-bold text-lg item-amount'>
            0
        </span>
        </button>
       
    </Link>
    {/* Mobile Nav */}
    {/* Overlay */}
    {nav ? <div className='backdrop-blur-sm bg-black/50 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
    
    {/* Side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
    <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(!nav)}/>
    <h2 className='text-2xl p-4'>Foodie</h2>
    <nav>
        <ul className='flex flex-col p-4 text-gray-800 lists'>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><TbTruckDelivery className='mr-4' size={25}/>Orders</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><MdFavorite className='mr-4' size={25}/>Favorites</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><FaWallet className='mr-4' size={25}/>Wallet</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><MdHelp className='mr-4' size={25}/>Help</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><AiFillTag className='mr-4' size={25}/>Promotions</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><BsFillSaveFill className='mr-4' size={25}/>Best Ones</li>
        <li className='text-xl py-4 flex items-center pl-4 cursor-pointer'><FaUserFriends className='mr-4' size={25}/>Invite Friends</li>
        </ul>
    </nav>
    </div>
</div>
  )
}

export default NavBar