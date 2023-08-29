import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination , Navigation ,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import {Testimonies} from '../utils/testimonies'
import 'swiper/css/pagination';
import {Quotes  } from "@phosphor-icons/react";

const Testimonial = () => {

    const breakpoints = {
        935: {
          slidesPerView: 3,
        },
        746: {
          slidesPerView: 3,
        },
        550: {
          slidesPerView: 2,
        },
      
      };


  return (
    <div className=' m-8'>
<div className='flex text-5xl font-semibold w-full pb-14'>
    <div className='flex mx-auto'>
    <h1 className='text-gray-700 '>Testi</h1>
    <h1 className='text-sky-700 underline'>mony.</h1>
    </div>
</div>

<Swiper
    
    modules={[Navigation, Pagination, Scrollbar, A11y]}
     pagination={{ clickable: true }}
     navigation={{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
      }}
      spaceBetween={30}
     
     breakpoints={breakpoints}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    
          >
{Testimonies.map((testimony) => {
 
    return (
      <SwiperSlide>
        <div className='p-2 pb-8 h-full cursor-pointer '>
<div className='bg-gray-300 p-2 rounded-2xl my-auto shadow-xl shadow-sky-300'>
    <div className='pb-4'>
    <h1 className=' text-lg text-sky-700 text-center'><Quotes /> {testimony.fullText}<Quotes className='right-0 flex w-full' />  </h1>
    </div>
    <h1 className='text-xl text-gray-700 font-semibold text-center'>{testimony.name}</h1>
    <h1 className='text-1g text-blue-700 text-center'>{testimony.position}</h1>
</div>


        </div>
      </SwiperSlide>
    );
  
})}
        
 </Swiper> 

    </div>
  )
}

export default Testimonial;