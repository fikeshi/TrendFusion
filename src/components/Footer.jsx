import React from 'react'
import { FaRegCopyright, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaPaypal, FaLocationDot, FaPersonRifle } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import card from "../assets/cardimage1.png"
import { FaGithub, FaHome } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-black text-gray-300'>
          <div className=' container max-w-screen-xl  mx-auto flex gap-3 flex-col pl-2 md:p-8 md:flex-row md:justify-between '>
            {/* Trendfusion Container */}
            <div className=' flex flex-col gap-4'>
                <h2 className='text-4xl text-white font-bold tracking-tighter'>TrendFusion</h2>
                <div className='flex items-center gap-2'>
                      <FaRegCopyright />
                      <p>Fikeshi</p>
                </div>
                <img className='w-60 h-10' src={card} alt="" />
                <div className='flex items-center gap-5'>
                      <FaGithub className='hover:text-white cursor-pointer'  />
                      <FaYoutube className='hover:text-white cursor-pointer' />
                      <FaFacebook className='hover:text-white cursor-pointer' />
                      <FaTwitter className='hover:text-white cursor-pointer' />
                      <FaInstagram className='hover:text-white cursor-pointer' />

                </div>
            </div>
            {/* Locate us Container */}
            <div className='flex flex-col gap-2'>
                  <h2 className='text-2xl text-white font-semibold'>locate us</h2>
                  <p>California</p>
                  <p>Mobile: 04738493784847</p>
                  <p>Phone: 084730384484</p>
                  <p>email: trendfusion@gmail.com</p>

            </div>
            {/* Profile */}
            <div className='flex flex-col gap-2'>
                  <h2 className='text-2xl text-white font-semibold'>profile</h2>
                  <div className='flex gap-2 items-center hover:text-white cursor-pointer'>
                    <MdPerson/>
                    <p>my account</p>
                </div>
                  <div className='flex gap-2 items-center hover:text-white cursor-pointer'>
                    <FaPaypal/>
                    <p>checkout</p>
                </div>
                <div className='flex gap-2 items-center hover:text-white cursor-pointer'>
                      <FaHome />
                      <p>order tracking</p>
                </div>
                  <div className='flex gap-2 items-center hover:text-white cursor-pointer'>
                      <FaLocationDot />
                      <p>help & support</p>
                </div>
            </div>
            {/* subscribe */}
            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border w-80 h-10 p-2' type="email" name="" id="" placeholder='email' />
                <button className='bg-transparent border border-t-0 w-80 h-6 font-bold active:bg-white active:text-white hover:bg-gray-900'>subscribe</button>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
