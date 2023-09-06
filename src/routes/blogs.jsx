import React from 'react';
import {BlogList} from '../utils/blogs';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Blogs = (props) => {
    const setBlogIndex = props.setBlogIndex;

    const changeBlogIndex=(index)=>{
        setBlogIndex(index);
    }
  return (
    <div className='py-20'>
<div className='w-full flex'>
<div className='flex mx-auto pb-9 text-4xl font-semibold'>
    <h1 className='text-gray-700'>Bl</h1><h1 className='text-sky-700 underline'>ogs</h1>
    </div>
    </div>

        <div className='grid grid:grid-cols-1 lsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5'>
{BlogList.map((blog)=>{

   return(
    <div className='bg-gradient-to-r from-blue-500 to-sky-400 text-white space-y-3 rounded-xl overflow-hidden
    hover:scale-105 duration-150'>
        <img className='mx-auto pt-2 ' src={blog.image} alt="" />
        <div className='p-4 space-y-3'>
        <h1>Title: {blog.topic}</h1>
        <h1>Genre: {blog.genre}</h1>
        <div className=''>
            <Link to="/the_magi_foundation_react/blogdetails#top">
            <button onClick={()=>changeBlogIndex(blog.id)} className='bg-sky-700 px-3 py-1 rounded-xl 
            hover:bg-sky-500 duration-150'>Read</button>
            </Link>
       
        </div>
        </div>
    </div>
   )

})}
        </div>
    </div>
  )
}

export default Blogs;