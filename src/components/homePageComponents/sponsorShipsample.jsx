import React from 'react';
import {KidsList} from '../../utils/kidsToSponsor'

const SponsorShipSample = () => {

    const filteredKidsList = KidsList.filter((kid, index) => {
        return kid.displayOnHome && index < 3;
      });


  return (
    <div>
<div className='flex text-3xl md:text-4xl slg:text-5xl font-semibold'>
    <div className='flex  mx-auto pb-9'>
    <h1 className='text-gray-700'>Sponsor</h1><h1 className='text-sky-700 underline'>Ships</h1>
    </div>
</div>
<div className='hidden md:grid grid-cols-4 gap-10 px-3'>

{KidsList.map((kid)=>{
    return kid.displayOnHome&& (<div className='relative shadow-2xl hover:shadow-sky-700 rounded-b-3xl overflow-hidden'>
        <div  className='rounded-t-3xl  overflow-hidden'>
    <img src={kid.image} className='rounded-b-3xl hover:scale-110 overflow-hidden transition-all duration-500' alt="" />
    </div>
    <div className='absolute bg-opacity-50 bottom-0 w-full text-center bg-sky-800 text-white py-4 rounded-b-3xl cursor-pointer 
    hover:bg-sky-600'>
        <h1>{kid.name}</h1>

    </div>

</div>)
})}
</div>

<div className='grid md:hidden grid-cols-3 gap-3 px-3'>

{filteredKidsList.map((kid)=>{
    return kid.displayOnHome&& (<div className='relative shadow-2xl hover:shadow-sky-700 rounded-b-3xl overflow-hidden'>
        <div  className='rounded-t-3xl  overflow-hidden'>
    <img src={kid.image} className='rounded-b-3xl hover:scale-110 overflow-hidden transition-all duration-500' alt="" />
    </div>
    <div className='absolute bg-opacity-50 bottom-0 w-full text-center bg-sky-800 text-white py-4 rounded-b-3xl cursor-pointer 
    hover:bg-sky-600'>
        <h1 className='text-xs sm:text-base'>{kid.name}</h1>

    </div>

</div>)
})}
</div>


    <div className='flex w-full   py-5' >
        <button className='text-white font-semibold bg-sky-700 mx-auto
         py-2 px-3 md:py-3 text-sm md:text-base md:px-5 rounded-full hover:bg-white hover:text-sky-700 hover:border-2 border-sky-700 duration-300'>Load More SponsorShips</button>
    </div>

</div>

   
  )
}

export default SponsorShipSample