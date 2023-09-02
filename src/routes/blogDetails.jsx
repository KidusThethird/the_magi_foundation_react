import React from 'react';
import {BlogList} from '../utils/blogs'

const BlogDetails = (props) => {

    const blogIndex = props.blogIndex;

  return (
    <div className='py-20'>

    <div className='grid grid-cols-3 mx-10 bg-gradient-to-r from-blue-600 to-sky-700 text-white rounded'>
        <div className='col-span-1 w-full h-full'>
            <img className='mx-auto my-10 rounded shadow-xl' src={BlogList[blogIndex].image} alt="" />

        </div>

        <div className='col-span-2 space-y-3 py-10 px-5'>
                <h1 className='text-xl'>Topic: {BlogList[blogIndex].topic}</h1>
                <h1>Genre: {BlogList[blogIndex].genre}</h1>
                <h1> {BlogList[blogIndex].fullText}</h1>
        </div>
    </div>

    </div>
  )
}

export default BlogDetails;