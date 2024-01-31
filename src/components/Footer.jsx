import React from 'react'

const Footer = () => {
    const currentYear = new Date();
  return (
    <footer className=' max-w-[1536px] mx-auto h-[700px] rounded-t-xl'>
        <div className='flex justify-between bg-gray-200 p-12 rounded-t-xl'>
            <div className='hidden xl:block h-[100%]'>
                <p className='font-bold text-4xl text-gray-700'>For better experience, download<br></br> the Foodie app now</p>
            </div>
            <div className='flex gap-4 justify-center w-[100%] lg:w-[50%]'>
                <img className='w-[150px] md:w-[250px]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="playstore"/>
                <img className='w-[150px] md:w-[250px]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore" />
            </div>
        </div>

        <div className='p-12 bg-black text-white flex flex-col lg:flex-row '>
            <div className='flex flex-col space-y-24'>
            <div className='space-y-2 mb-4'>
                <h1 className='text-4xl font-bold'>Foodie</h1>
                <p className='text-gray-400 font-bold'>&copy; {currentYear.getFullYear()} Hizbu Technologies.</p>
            </div>
            <div className='hidden lg:w-[500px] lg:flex'>
                <img className='w-[100%] object-cover' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png" alt="somedrinks" />
            </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 p-4 gap-4 lg:gap-24 mx-auto'>
                <div>
                <h1 className='font-bold text-lg lg:text-2xl mb-2'>Company</h1>
                <ul className='space-y-2 text-lg font-semibold text-white/60 footer-links'>
                    <li className='hover:cursor-pointer'>About</li>
                    <li className='hover:cursor-pointer'>Careers</li>
                    <li className='hover:cursor-pointer'>Team</li>
                    <li className='hover:cursor-pointer'>Foodie One</li>
                    <li className='hover:cursor-pointer'>Foodie Instamart</li>
                    <li className='hover:cursor-pointer'>Foodie Genie</li>
                </ul>
                </div>

                <div>
                <h1 className='font-bold text-lg lg:text-2xl mb-2 '>Contact us</h1>
                <ul className='space-y-2 text-lg font-semibold text-white/60 footer-links'>
                    <li className='hover:cursor-pointer'>Help & Support</li>
                    <li className='hover:cursor-pointer'>Partner with us</li>
                    <li className='hover:cursor-pointer'>Ride with us</li>
                    
                </ul>
                </div>
                <div>
                <h1 className='font-bold text-lg lg:text-2xl mb-2'>Legal</h1>
                <ul className='space-y-2 text-lg font-semibold text-white/60 footer-links'>
                    <li className='hover:cursor-pointer'>Terms & Conditions</li>
                    <li className='hover:cursor-pointer'>Cookie Policy</li>
                    <li className='hover:cursor-pointer'>Privacy Policy</li>
                    
                </ul>
                </div>
                
                <div>
                <h1 className='font-bold text-lg lg:text-2xl mb-2 '>We deliver to:</h1>
                <ul className='space-y-2 text-lg font-semibold text-white/60 footer-links'>
                    <li className='hover:cursor-pointer'>Kandy</li>
                    <li className='hover:cursor-pointer'>Colombo</li>
                    <li className='hover:cursor-pointer'>Galle</li>
                    <li className='hover:cursor-pointer'>Kurunegala</li>
                    <li className='hover:cursor-pointer'>Trincomalee</li>
                    <li className='hover:cursor-pointer'>Jaffna</li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer