import React, { useState } from 'react';
import Logo from '../../assets/images/logo/themagilogo1.png';
import { Link } from 'react-router-dom';
import {List , X , CaretDown } from "@phosphor-icons/react";
const Navbar = (props) => {

 const setCategorySelected = props.setCategorySelected;

 const [dropDownList, setDropDownList] =useState(true);
 const [aboutList, setAboutList] = useState(false);
 const [galleryList, setGalleryList] = useState(false);

 const toggleDropDownList= ( )=>{
  dropDownList ? setDropDownList(false) : setDropDownList(true);
  console.log('print')
 }

 const toggleAboutList= ()=>{
  aboutList ? setAboutList(false): setAboutList(true);
 }
 const toggleGalleryList=()=>{
  galleryList ? setGalleryList(false): setGalleryList(true);
 }

  return (
    <div className='fixed z-50 w-full '>
    <div className='flex justify-between px-8 lg:px-0 lg:justify-around bg-blue-900 text-white py-3  '>

<div className='my-auto flex'>
    <img className='w-8' src={Logo} alt="" />
   <h1 className=' sm:block sm:text-xl my-auto pl-5 smd:text-2xl font-semibold text-sky-400'> The Magi Foundation </h1>
</div>

<div className='hidden lg:flex space-x-10 my-auto  '>
<a href="/">Home</a>
<div className="group relative ">
            <h1 className='cursor-pointer'>About</h1>
            <div className="hidden group-hover:block absolute w-32  left-0 z-50">
              <div className="flex flex-col px-4 py-1 space-y-2 w-full  bg-blue-900 rounded-b-2xl">
                <a className="text-left " href="/ourstory">Our Story</a>
                <a className="text-left" href="/ourteam">Our Team</a>
              </div>
            </div>
          </div>

<a href="/events">Events</a>

<div className='group relative'>
  <h1 className='cursor-pointer'>Gallery</h1>
  <div className="hidden group-hover:block absolute w-32  left-0 z-50">
              <div className="flex flex-col px-4 py-1 space-y-2 w-full  bg-blue-900 rounded-b-2xl">
                <a href="/gallery">All</a>
             
                <Link to="/gallery" onClick={() => setCategorySelected("school")}>School</Link>
                <Link to="/gallery" onClick={() => setCategorySelected("debrebrhan")}>Debrebrhan</Link>
                <Link to="/gallery" onClick={() => setCategorySelected("other")}>Other</Link>
              
              </div>
            </div>
</div>
<a href="/sponsorship">Sponsorship</a>
<a href="/blogs">Blog</a>
<a href="/contact">Contact</a>
</div>




<div className='hidden lg:block bg-sky-600 px-4 py-2 rounded-3xl'>
    <button>Donate</button>
</div>
<div className='lg:hidden cursor-pointer' onClick={()=>toggleDropDownList() }>
  {!dropDownList&&
   <List size={32} />
  }
   {dropDownList&&
   <X size={32} />
  }
</div>

    </div>

  
{dropDownList &&
  <div className='w-full flex relative  '>
    <div className='overflow-y-auto max-h-[500px] scroll-auto  absolute right-0 rounded-bl-2xl shadow-2xl shadow-blue-700 bg-blue-900 bg-opacity-90 text-white w-1/3 flex flex-col text-left pl-7 space-y-5 py-5'>
    <a href="/">Home</a>
    <div onClick={()=>toggleAboutList()} className='flex  space-x-2'>
    <a href="">About</a>
    <CaretDown size={20}/>
    </div>
    {aboutList &&
 <div className='ml-4 flex flex-col space-y-5'>
 <a href="" >About1</a>
 <a href="">About2</a>
 </div>

    }
   
    <a href="">Eents</a>
    <div  onClick={()=>toggleGalleryList()} className='flex  space-x-2'>
    <a href="">Gallery</a>
    <CaretDown size={20}/>
    </div>
    {galleryList &&
      <div className='ml-4 flex flex-col space-y-5'>
      <a href="">Gallery1</a>
      <a href="">Gallery2</a>
      <a href="">Gallery3</a>
      <a href="">Gallery1</a>
      <a href="">Gallery2</a>
      <a href="">Gallery3</a>
    </div>
    }
  
    
    <a href="/sponsorship">Sponsorship</a>
    <a href="/blogs">Blog</a>
    <a href="/contact">Contact</a>
    <div>
    <button className='bg-sky-600 px-3 py-1 rounded-2xl'>Donate</button>
    </div>
    </div>
  </div>
}
  
    </div>
  )
}

export default Navbar;