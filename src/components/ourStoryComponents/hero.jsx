import React from 'react'
import HeroImage1 from '../../assets/images/custom/001.jpg'

const Hero = () => {
  return (
    <div className='bg-gray-300 relative'>
        <div className='flex flex-col md:grid grid-cols-2 '>
            <div className='hidden md:block py-10 pl-20 z-10'>
            <img className='my-10 ml-10 bg-opacity-50 rounded-3xl shadow-2xl shadow-blue-700 bg-blue-700' src={HeroImage1} alt="" />
            </div>


            <div className='py-10 pr-10 flex h-full z-10'>
                <div className='p-10 my-auto bg-sky-700 shadow-2xl shadow-black '>
                   <div className='text-4xl font-semibold flex space-x-2'>
                     <h1 className='text-gray-300'>Our</h1> <h1 className='underline text-white '>Story</h1>
                     </div>
                     <h1 className='text-2xl text-gray-400 pt-4'>About the Organization</h1>
                     <p className='pt-7 text-gray-200'>
                     The Magi Foundation is a local, charitable, non-for profit, non-governmental organization. Its inception was from Australian couple of Ethiopian origin whose true Passion for Supporting Children, brought two Ethiopians to found it and register in Ethiopia in April 2022.
                     </p>
                     <div className='pt-5 '>
                     <button className='bg-sky-500 text-white px-3 py-1 rounded' >Learn More</button>
                     </div>
                </div>
            </div>
        </div>

        <div className='hidden md:block absolute h-1/2 w-1/2 left-1/3 bg-sky-500 bottom-8 z-0'>

        </div>
        <div className=' absolute h-64 w-64 shadow-2xl shadow-orange-500 right-0 rounded-full bg-sky-500 top-24 z-0'>

</div>
    </div>
  )
}

export default Hero;