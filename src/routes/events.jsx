import React from 'react';
import { EventsList } from '../utils/events';

const Events = () => {
  return (
    <div className='pt-16'>

        <div className='grid grid-cols-3 mx-10 py-10 overflow-hidden'>

            {EventsList.map((chosen_event)=> {
        return (
        <div className='mb-20 rounded-2xl relative overflow-hidden cursor-pointer hover:scale-105 duration-200  w-fit mx-auto shadow-2xl shadow-sky-700'>

<img className='mx-auto ' src={chosen_event.image} alt="" />

<div className='absolute bottom-9 w-full text-center  '>
<h1 className='text-center text-xl bg-sky-700 bg-opacity-80 text-white' >{chosen_event.title}</h1>
</div>

<div className='absolute top-0 w-full text-center   '>
<h1 className='text-center text-xl bg-sky-700 bg-opacity-80 text-white rounded-t-2xl' >{chosen_event.date}</h1>
</div>

        </div>)

            })}

        </div>
     </div>
  )
}

export default Events;