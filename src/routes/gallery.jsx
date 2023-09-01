import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {GalleryImages} from '../utils/galleryImages';

const Gallery = () => {

   const [categorySelected , setCategorySelected] = useState("all");

   const changeSeclectedCategory=( selected )=>{
 
    setCategorySelected(selected);

   }
  
  return (

    <div className='pt-20  '>

        <div className='text-4xl font-semibold flex w-fit mx-auto py-6'>
            <h1 className='text-gray-700'>Gal</h1>
            <h1 className='text-sky-700 underline'>lery</h1>
        </div>
        <div className='w-fit mx-auto space-x-3 text-gray-300 pb-3'>
            <button onClick={()=>changeSeclectedCategory('all')} className='bg-sky-700 px-3 py-1 rounded-xl'>All</button>
            <button onClick={()=>changeSeclectedCategory('debrebrhan')}  className='bg-sky-700 px-3 py-1 rounded-xl'>Debrebrhan</button>
            <button onClick={()=>changeSeclectedCategory('school')}  className='bg-sky-700 px-3 py-1 rounded-xl'>School</button>
            <button onClick={()=>changeSeclectedCategory('other')}  className='bg-sky-700 px-3 py-1 rounded-xl'>Other</button>
        </div>

<ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1100:4}}
            >
                <Masonry>

                {GalleryImages
               
  .filter((image) => categorySelected=="all" || image.category === categorySelected )
  .map((image) => (
    <img src={image.src} alt="" className="px-2 py-2" />
  ))}
                  
                   
                </Masonry>
            </ResponsiveMasonry>


    </div>
  )
}

export default Gallery;