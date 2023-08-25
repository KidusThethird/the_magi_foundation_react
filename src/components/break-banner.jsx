import React from 'react';
import CoverImage from '../assets/images/banner/themagicover.jpeg'

const BreakBanner = () => {
  return (
    <div className='my-20  grid grid-cols-2' 
    style={{
    backgroundImage: `url(${CoverImage})`, 
    backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundAttachment: 'fixed' }}>
        

<div className=" py-32 w-full">
   <div className='flex text-5xl font-bold space-x-5  justify-center'>
    <h1 className='text-white'>Support </h1> 
    <h1 className=' text-sky-700 underline '>The Cause</h1>
    </div>
    <div className='flex justify-center'>
    <h1 className='pt-4 text-lg text-white '>Support the ause and be hope for someone in need.</h1>
    </div>
      </div>


      <div className='w-full h-full flex'>

        <a href="" className='bg-white text-gray-700 px-5 py-3 rounded-full m-auto '>Donate Now</a>
      </div>
    </div>
  )
}

export default BreakBanner;