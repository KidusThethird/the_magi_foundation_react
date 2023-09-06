import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination , Navigation ,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import {BlogList} from '../../utils/blogs'
import 'swiper/css/pagination';
import { Link } from "react-router-dom";


const Blog = (props) => {

  const setBlogIndex =props.setBlogIndex;

  const changeBlogIndex=(index)=>{
    setBlogIndex(index);
  }

    const breakpoints = {
        935: {
          slidesPerView: 4,
        },
        746: {
          slidesPerView: 3,
        },
        550: {
          slidesPerView: 2,
        },
      
      };

    return <div className=" px-10 mb-10">
        <div className='w-full flex'>
<div className='flex mx-auto pb-9 text-4xl font-semibold'>
    <h1 className='text-gray-700'>Bl</h1><h1 className='text-sky-700 underline'>ogs</h1>
    </div>
    </div>


        <div>
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



{BlogList.map((blog) => {
  if (blog.displayOnHomePage) {
    return (
      <SwiperSlide>
        <div className='mx-auto w-fit cursor-pointer mb-10 bg-gradient-to-r from-blue-500 to-sky-400 text-white space-y-3 rounded-xl overflow-hidden
       hover:shadow-xl hover:shadow-sky-700'>
        <img className="mx-auto pt-2" src={blog.image} alt="" />
        <div className='p-4 space-y-3'>
        <h1 className="w-full">Title: {blog.topic}</h1>
        <h1>Genre: {blog.genre}</h1>
        <div className=''>
            <Link to="/the_magi_foundation_react/blogdetails#top">
            <button onClick={()=>changeBlogIndex(blog.id)}  className='bg-sky-700 px-3 py-1 rounded-xl
            hover:scale-105 hover:bg-sky-500 duration-150'>Read</button>
            </Link>
       
        </div>
        </div>
    </div>
      </SwiperSlide>
    );
  } else {
    return null; 
  }
})}
        
 </Swiper> 
        </div>
    </div>
}

export default Blog;