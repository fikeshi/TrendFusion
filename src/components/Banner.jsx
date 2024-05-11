import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Banner = () => {
 const data = [image1, image2, image3]
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div className='w-[300vw] h-full flex'>
                  <img className='w-screen h-[570px]'  src={data[0]} loading="priority" alt="" /> 
                  <img className='w-screen h-[570px]'  src={data[1]}  alt="" /> 
                  <img className='w-screen h-[570px]'  src={data[2]}  alt="" /> 
            </div> 
            <div className='absolute flex top-1/2 left-1/2 gap-30 md:flex md:justify-between md:gap-30'>
                <div className='w-10 h-10 border-2 flex justify-center items-center text-white'>
                    <PiLessThan className='' />
                </div>
                <div className='w-10 h-10 border-2 flex justify-center items-center text-white'>
                    <PiGreaterThan className='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
