import React from 'react';
import HeroImage1 from '../assets/images/banner/magi_banner_01.jpg';
import HeroImage2 from '../assets/images/banner/magi_banner_02.jpg';
import HeroImage3 from '../assets/images/banner/magi_banner_04.jpg';
import {CaretDown  } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <div className=' '>

<div className='relative flex w-full items-center justify-center'>
<img className='w-full' src={HeroImage1} alt="" />
    <div className=' bg-gradient-to-b from-black to-blue-600 absolute w-full h-full top-0  opacity-60 '>
    </div>
    <div className='   absolute text-center top-1/3 justify-center ' >
        
        <div className='flex text-6xl font-bold space-x-3'>
            <h1 className='text-blue-500 underline '>PARTNER </h1>
         <h1 className='text-white'> WITH US</h1>
         </div>
        <div className='pt-10 flex space-x-4 justify-center'>
            <button className='border-4 bg-black bg-opacity-40 border-sky-500 rounded-full font-semibold text-white text-xl px-3 py-1'>
                Contact Us
            </button>
            <button className='bg-blue-800 rounded-full font-semibold shadow-2xl text-white text-xl px-3 py-1'>
                Volunteer
            </button>
        </div>
        <div className='justify-center w-full flex pt-14 '>
            <div className='text-blue-600 bg-white p-4 rounded-full cursor-pointer'>
            <CaretDown size={32}/>
            </div>
        </div>
    </div>

</div>
    </div>
  )
}

export default Hero;