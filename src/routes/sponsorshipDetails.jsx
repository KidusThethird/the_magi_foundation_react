
import React from 'react'
import {KidsList} from '../utils/kidsToSponsor'
const SponsorshipDetails = (props) => {

  const sponsorShipIndex = props.sponsorShipIndex;

  return (
    <div className='pt-10'>

      <div className='py-10 grid grid-cols-1 sm:grid-cols-2  bg-gradient-to-r from-blue-500 to-purple-500'>

        <div className='mx-auto py-5 px-5'>
          <img className='w-3/4 rounded-2xl shadow-2xl' src={KidsList[sponsorShipIndex].image} alt="" />
        </div>
        <div className='h-full flex'>
          <div className='my-auto mx-5 space-y-4 text-white text-lg'>
          <h1> <span className='font-semibold'>Name: </span> {KidsList[sponsorShipIndex].name}</h1>
          <h1> <span className='font-semibold'>Gender:</span> {KidsList[sponsorShipIndex].gender}</h1>
          <h1> <span className='font-semibold'>Status:</span> {KidsList[sponsorShipIndex].status}</h1>
          <h1> <span className='font-semibold'>Class:</span> {KidsList[sponsorShipIndex].class}</h1>
          <h1> <span className='font-semibold'>City:</span> {KidsList[sponsorShipIndex].city}</h1>
         
          <h1><span className='font-semibold'>Subcity:</span> {KidsList[sponsorShipIndex].subCity}</h1>
          <h1><span className='font-semibold'>Kebele: </span>{KidsList[sponsorShipIndex].kebele}</h1>
          <div className=''>
          <button className='bg-sky-700 px-3 py-1 rounded-2xl'>Sponsor</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorshipDetails;
