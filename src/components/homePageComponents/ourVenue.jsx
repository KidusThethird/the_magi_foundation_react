import React from 'react';
import {MapPin , Envelope, Phone   } from "@phosphor-icons/react";


const OurVenue = () => {
  return (
    <div>
        <div className='flex text-5xl font-semibold space-x-3 p-5'>
        <h1 className='text-gray-700 '>Our</h1>
        <h1 className='text-sky-700 underline'>Venue</h1>
        </div>


        <div className='grid grid-cols-2 p-10 gap-x-5 '>

        <div className="w-full  mx-auto rounded-xl overflow-hidden border-2 border-sky-700 border-opacity-30">
  <div className="relative h-0 " style={{ paddingBottom: '66.66%' }}>
    <iframe src="https://maps.google.com/maps?q=Dashen%20Bank%20Sc%20Ghion%20Branch&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" className="absolute inset-0 w-full h-full"></iframe>
  </div>
</div>

        <div className='h-full '>
            <div className='flex w-full  bg-sky-700 rounded-t-3xl'>
            <h1 className=' text-white text-4xl font-semibold py-7 j mx-auto'>The Magi Foundation</h1>
            </div>
            <div className='text-2xl font-semibold  text-gray-700 justify-evenly flex flex-col h-3/4  shadow-2xl shadow-sky-700 '>
            <div className='flex justify-center gap-x-2'>
                <MapPin className='my-auto'/>
               <h1 > Ras Desta Damtew St, Addis Ababa</h1>
            </div>
            <div className='flex justify-center gap-x-2'>
                <Envelope className='my-auto' />
               <h1> info@themagifoundation.org</h1>
            </div>
            <div className='flex justify-center gap-x-2'>
                <Phone className='my-auto'/>
                <h1> ETH +251-978785006</h1>
            </div>
            <div className='flex justify-center gap-x-2'>
                <Phone className='my-auto'/>
                <h1> ASTL +61422088825</h1>
            </div>
            <div className='flex justify-center gap-x-2'>
                <Phone className='my-auto'/>
                <h1>USA +15719770815</h1>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OurVenue