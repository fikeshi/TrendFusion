import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Banner = () => {

  return (
    <div className='relative'>
          <img className='w-[100%] h-[570px]' src={image1}alt="" />
          <div className='absolute top-3/4 left-1/2 gap-8 flex justify-center items-center'>
            <div className='w-10 h-10 border-2 flex justify-center items-center text-white'>
                <PiLessThan className=''  />
            </div>
              <div className='w-10 h-10 border-2 flex justify-center items-center text-white'>
              <PiGreaterThan className='' />
            </div>
              
          </div>
    </div>
  )
}

export default Banner
