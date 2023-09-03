import React from 'react';
import {AdvertisementList} from '../../utils/advertisement'

const Advertisement = () => {
  return (
    <div>
        {AdvertisementList.map((ad)=>{
           return <div className='slg:grid grid-cols-3 shadow-xl shadow-sky-300 mx-5 md:mx-20  rounded-2xl bg-gradient-to-r from-sky-700 to-gray-300'>
            <div className='col-span-2 flex flex-col p-10 w-full justify-evenly'>
                <h1 className='text-3xl font-semibold text-white'>{ad.title}</h1>
                <h1 className='text-lg text-yellow-400 font-semibold'>{ad.miniTitle}</h1>
                <h1 className='text-2xl sm:text-3xl slg:text-5xl text-white font-bold'>{ad.date}</h1>
              
                <p className='text-white '>Location: {ad.location}</p>
                <p className='text-lg font-semibold text-yellow-300'>{ad.description}</p>

            </div>
            <div className='col-span-1 p-10'>
                <img className='rounded-3xl w-1/2 slg:w-full mx-auto' src={ad.images[0]} alt="" />
                </div>    
                
            </div>
        })}
    </div>
  )
}

export default Advertisement