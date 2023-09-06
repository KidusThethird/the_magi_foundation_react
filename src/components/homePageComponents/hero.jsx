import React, { useEffect, useState } from 'react';
import HeroImage1 from '../../assets/images/banner/magi_banner_01.jpg';
import HeroImage2 from '../../assets/images/banner/magi_banner_02.jpg';
import HeroImage3 from '../../assets/images/banner/magi_banner_04.jpg';
import HeroImageForMobile from '../../assets/images/banner/New folder/magi_banner_01_mobile.jpg'
import HeroImageForTab from '../../assets/images/banner/New folder/magi_banner_01_tab.jpg'
import {CaretDown  } from "@phosphor-icons/react";
import { motion  } from 'framer-motion';

const Hero = () => {
  const HeroImages = [HeroImage1, HeroImage2, HeroImage3];
  const [activeImage, setActiveImage] = useState(0);
 let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index < 2 ? index=index + 1 : index = 0;  
      setActiveImage(index);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div  className='pt-10 scroll-smooth'>

<div className='relative flex w-full items-center justify-center'>

<img className='hidden md:block w-full ' src={HeroImages[activeImage]} alt="" />

<img className='hidden xsm:block md:hidden w-full shadow-2xl shadow-blue-600' src={HeroImageForTab} alt="" />

<img className='xsm:hidden w-full shadow-2xl shadow-blue-600' src={HeroImageForMobile} alt="" />


    <div className=' bg-gradient-to-b from-black to-blue-600 absolute w-full h-full top-0  opacity-60 '>
    </div>
    <div className='   absolute text-center top-1/3 justify-center ' >
        
        <motion.div 
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10], // Floating animation along the y-axis
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className='flex text-3xl smd:text-4xl slg:text-6xl font-bold space-x-3'>
            <motion.h1
  initial={{  x: -100 }}
  animate={{  x: 0 }}
  transition={{ duration: 2 }}
            className='text-sky-300 underline'>
              PARTNER 
              </motion.h1>
         <motion.h1 
           initial={{  x: 100 }}
           animate={{  x: 0 }}
           transition={{ duration: 2 }}
         className='text-white'> 
         WITH US
         </motion.h1>
         </motion.div>
        <div className='text-md smd:text-lg slg:text-xl pt-10 flex space-x-4 justify-center'>
            <button className='border-4 bg-black bg-opacity-40 border-sky-500 rounded-full font-semibold text-white px-2 py-1 smd:px-3 smd:py-1
            hover:bg-sky-500 duration-150'>
              <a href="#contact"> Contact Us</a>
               
            </button>
            <button className='bg-blue-800 rounded-full font-semibold shadow-2xl text-white  px-3 py-1
            hover:bg-black hover:bg-opacity-40 duration-150'>
                Volunteer
            </button>
        </div>
        <div className='hidden sm:flex justify-center w-full  pt-14 '>
            <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10, -10], // Floating animation along the y-axis
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
           
            className=' text-blue-600 bg-white p-4 rounded-full cursor-pointer border-2 border-blue-700 border-opacity-40
            hover:scale-105 duration-150'>
              <a href="#about">
            <CaretDown size={32}/>
            </a>
            </motion.div>
        </div>
    </div>

</div>
<div className='h-0 w-full bg-gradient-to-b from-blue-500 to-blue-100'>


</div>
    </div>
  )
}

export default Hero;