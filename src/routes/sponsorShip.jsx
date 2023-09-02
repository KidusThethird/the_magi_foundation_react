import React from 'react';
import {KidsList} from '../utils/kidsToSponsor';
import { Link } from 'react-router-dom';

const SponsorShip = (props) => {

    const setSponsorShipIndex = props.setSponsorShipIndex;

    const changeSponsorShipIndex= (id) => {

        setSponsorShipIndex(id);
    }
  return (
    <div className='py-20'>

<div className='flex text-5xl font-semibold'>
    <div className='flex  mx-auto pb-9'>
    <h1 className='text-gray-700'>Sponsor</h1><h1 className='text-sky-700 underline'>Ships</h1>
    </div>
</div>

<div className='grid grid-cols-4 gap-10 px-3'>

{KidsList.map((kid)=>{

const index = (parseInt(kid.id))+1;

    return (
        <Link to="/sponsorshipdetails">
    <div onClick={()=>changeSponsorShipIndex(kid.id)} className='relative shadow-2xl hover:shadow-sky-700 rounded-b-3xl overflow-hidden'>
        <div  className='rounded-t-3xl  overflow-hidden'>
    <img src={kid.image} className='rounded-b-3xl hover:scale-110 overflow-hidden transition-all duration-500' alt="" />
    </div>
    <div className='absolute bg-opacity-50 bottom-0 w-full text-center bg-sky-800 text-white py-4 rounded-b-3xl cursor-pointer 
    hover:bg-sky-600'>
        <h1>{kid.name}</h1>

    </div>

    <div className='absolute top-0 text-xl text-white rounded-tl-3xl overflow-hidden '>
        <h1 className='bg-blue-500 p-3'>{index}</h1>
    </div>

</div>
</Link>
)
})}
</div>

    </div>
  )
}

export default SponsorShip;