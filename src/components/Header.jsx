import React, { useState } from 'react'
import trendlogo from '../assets/trend-logo.png'
import { GiShoppingCart } from "react-icons/gi";
import profile from "../assets/profile-image.jpeg"
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen]=useState(false)
  return (
      <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-10'> 
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between md:ml-28 md:mr-28 ml-4 mr-4  ">
            <div>
                <img className="w-48" src={trendlogo} alt="Trendfusion logo" />
            </div>
              <div className='flex items-center gap-8'>
                  {isOpen ? <div> <ul className='block items-center gap-8 mt-52 md:hidden '>
                    <li className='text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                  </ul> <div className='relative hidden'>
                    <GiShoppingCart className='w-8 h-8' />
                    <span className='absolute top-[-5px] left-6 flex justify-center items-center font-semibold'>0</span>
                  </div>
            <img className='w-8 h-8 rounded-full' src={profile} alt="" /> </div>
                   : <ul className='md:flex md:items-center md:gap-8 '>
                      <Link to='/'><li className='text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li></Link>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                      <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                  </ul>}
                    <Link to='/cart'><div className='relative '>
                    <GiShoppingCart className='w-8 h-8' />
                    <span className='absolute top-[-5px] left-6 flex justify-center items-center font-semibold'>0</span>
                  </div></Link>
                  <img className='w-8 h-8 rounded-full' src={profile} alt="" />
            </div>
            <button className='md:hidden' onClick={()=>setIsOpen(!isOpen)}>X</button>
        </div>
    </div>
  )
}
 
export default Header
