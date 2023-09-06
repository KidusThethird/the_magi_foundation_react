import React from 'react';

import CoverImage from '../../assets/images/banner/themagicover.jpeg'

const BreakBanner = () => {
  return (
    <div className='mt-20 mb-10  md:grid grid-cols-2 ' 
    style={{
    backgroundImage: `url(${CoverImage})`, 
    backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundAttachment: 'fixed' }}>
        

<div className="  bg-blue-700  bg-opacity-30 py-20 md:py-32 w-full pl-0 md:pl-11 slg:pl-0">
   <div className='mx-auto w-fit   flex   text-4xl slg:text-5xl font-bold space-x-5  '>
    <h1 className='text-white'>Support </h1> 
    <h1 className=' text-sky-300 underline '>The Cause</h1>
    </div>
    <div className='flex justify-center'>
    <h1 className='pt-4 px-4 text-lg text-white text-center '>Support the cause and be hope for someone in need.</h1>
    </div>
      </div>


      <div className=' bg-blue-700 bg-opacity-30 w-full h-full flex pb-12 md:pb-0 '>

        <a href="https://www.paypal.com/donate/?hosted_button_id=9V5YC8K6HDLBC" target='_blank' className='bg-white  text-gray-700 font-semibold px-5 py-3 rounded-full m-auto 
        hover:bg-sky-700 hover:text-white duration-200'>Donate Now</a>
      </div>
    </div>
  )
}

export default BreakBanner;