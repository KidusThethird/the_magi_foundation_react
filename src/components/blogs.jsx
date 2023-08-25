import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination , Navigation ,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import {BlogList} from '../utils/blogs'
import 'swiper/css/pagination';


const Blog = () => {

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

    return <div className=" px-10">
        <div>
            <h1 className="text-4xl font-semibold text-gray-700 text-center pb-10">Blogs</h1>
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
        <div className="mx-1 pb-4 mb-8   px-3 pt-3 rounded-lg border-opacity-20 rounded-t-3xl border-sky-700 bg-gradient-to-t from-blue-200 to-white">
          <div className="w-full    overflow-hidden">
            <img className="mx-auto rounded-xl" src={blog.image} alt="" />
          </div>
          <div className="w-full space-y-5 pt-4 px-5  ">
            <h1 className="text-xl text-center mx-auto text-sky-700">
              Topic: {blog.topic}
            </h1>
            <h1 className="text-lg">Genre: {blog.genre}</h1>
            <p>{blog.highlight}</p>
            <button className="text-white bg-sky-700 rounded-full px-3 py-1">
              Read More
            </button>
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