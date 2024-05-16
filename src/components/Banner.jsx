import React, { useState } from 'react'
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Banner = () => {
 const data = [image1, image2, image3]
 const [currentSlide, setCurrentSlide]=useState(0)
function prevSlide(){
    setCurrentSlide(currentSlide === 0 ? 2 :(prev)=>prev-1)
    
}
function nextSlide(){
    setCurrentSlide(currentSlide === 2 ? 0 :(prev)=>prev + 1)
   
}

  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[300vw] h-full flex'>
                  <img className='w-screen h-[570px]'  src={data[0]} loading="priority" alt="" /> 
                  <img className='w-screen h-[570px]'  src={data[1]}  alt="" /> 
                  <img className='w-screen h-[570px]'  src={data[2]}  alt="" /> 
            </div> 
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-10 h-10 border-2 flex border-gray-700 justify-center items-center hover:bg-gray-700 hover:text-white hover:cursor-pointer'>
                    <PiLessThan className='' />
                </div>
                  <div onClick={nextSlide} className='w-10 h-10 border-2 flex border-gray-700 justify-center items-center hover:bg-gray-700 hover:text-white hover:cursor-pointer'>
                    <PiGreaterThan className='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
