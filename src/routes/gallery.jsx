import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {GalleryImages} from '../utils/galleryImages';

const Gallery = (props) => {

  const categorySelected = props.categorySelected;
  const setCategorySelected = props.setCategorySelected;
   const [activeImage , setActiveImage] = useState ("0");
   const [viewImage, setViewImage] = useState(false);

   const lengthofImageArray = (GalleryImages.length) -1 ;

   const changeSeclectedCategory=( selected )=>{
 
    setCategorySelected(selected);

   }

   const changeActiveImage =(selected) =>{
    setActiveImage(selected);
    setViewImage(true);
    
   }


   const closeImageViwer=() =>{
    setViewImage(false);
   }

   const nextImageShow=() =>{
if(activeImage < lengthofImageArray){
  setActiveImage(parseInt(activeImage) +1);
}

   }
   const pervImageShow=()=>{
if(activeImage >0){
  setActiveImage(parseInt(activeImage) - 1);
}
   }

   
 
  return (
<>
{viewImage && <div className='pt-16 fixed  w-full h-full  bg-sky-700 bg-opacity-60  flex justify-center align-middle overflow-hidden z-40'>
        <div className='w-full absolute   flex  pt-5'>
          <button onClick={()=>closeImageViwer()} className='absolute right-0 mr-3 mt-3  md:mr-10 text-xl text-white bg-gray-800 px-3 pb-1 rounded-full'>x</button>
        </div>
        <button onClick={()=>pervImageShow()} className=' ml-10 h-fit my-auto text-center text-3xl justify-center  px-2 rounded pb-1 bg-gray-800 text-white'>{"<"}</button>
            <img className='w-5/6 lg:w-fit object-cover  px-5' src={GalleryImages[activeImage].src} alt="" />
            <button onClick={()=>nextImageShow()} className='mr-10 h-fit my-auto text-center text-3xl pb-1 px-2 rounded bg-gray-800 text-white'>{">"}</button>
            
        </div>}
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
    <div  onClick={()=>changeActiveImage(image.id)} className='cursor-pointer'>
    <img src={image.src} alt="" className="px-2 py-2"  />
    </div>
  ))}
                  
                   
                </Masonry>
            </ResponsiveMasonry>


    </div>
    </>
  )
}

export default Gallery;