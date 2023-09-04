import React, { useState } from 'react';
import Logo from '../../assets/images/logo/themagilogo1.png';
import { Link } from 'react-router-dom';
import {List , X , CaretDown } from "@phosphor-icons/react";
const Navbar = (props) => {

 const setCategorySelected = props.setCategorySelected;

 const [dropDownList, setDropDownList] =useState(false);
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
 const toDefalult =() =>{
  toggleDropDownList(); setAboutList(false); setGalleryList(false)
 }

  return (
    <div className='fixed z-50 w-full '>
    <div className='flex justify-between px-8 lg:px-0 lg:justify-around bg-blue-900 text-white py-3  '>

<div className='my-auto flex'>
    <img className='w-8' src={Logo} alt="" />
   <h1 className=' sm:block sm:text-xl my-auto pl-5 smd:text-2xl font-semibold text-sky-400'> The Magi Foundation </h1>
</div>

<div className='hidden lg:flex space-x-10 my-auto  '>
  <Link  to="/">Home</Link>

<div className="group relative ">
            <h1 className='cursor-pointer'>About</h1>
            <div className="hidden group-hover:block absolute w-32  left-0 z-50">
              <div className="flex flex-col px-4 py-1 space-y-2 w-full  bg-blue-900 rounded-b-2xl">
                <Link to="/ourstory">Our Story</Link>
                <Link to="/ourteam">Our Team</Link>
         
              </div>
            </div>
          </div>


<Link to="/events">Events</Link>

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
<Link to="/sponsorship">SponsorShip</Link>
<Link to='blogs'>Blog</Link>
<Link to='/contact'>Contact</Link>

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
  <div  className='w-full flex relative  '>
    <div  className='w-1/2  smd:w-1/3 overflow-y-auto max-h-[500px] scroll-auto  absolute right-0 rounded-bl-2xl shadow-2xl shadow-blue-700 bg-blue-900 bg-opacity-90 text-white  flex flex-col text-left pl-7 space-y-5 py-5'>
   
    <Link onClick={()=>toDefalult()} to='/'>Home</Link>
    <div onClick={()=>toggleAboutList()} className='flex  space-x-2'>
    <a href="">About</a>
    <CaretDown size={20}/>
    </div>
    {aboutList &&
 <div className='ml-4 flex flex-col space-y-5'>
  <Link onClick={()=>toDefalult()} to="/ourstory">Our Story</Link>
  <Link onClick={()=>toDefalult()} to="/ourteam">Our Team</Link>
 </div>

    }
   
    <Link onClick={()=>toDefalult()} to='/events'>Events</Link>
    <div  onClick={()=>toggleGalleryList()} className='flex  space-x-2'>
    <a href="">Gallery</a>
    <CaretDown size={20}/>
    </div>
    {galleryList &&
      <div className='ml-4 flex flex-col space-y-5'>

        <Link to="/gallery" onClick={() => {setCategorySelected("school"); toDefalult();}}>School</Link>
        <Link to="/gallery" onClick={() => {setCategorySelected("debrebrhan"); toDefalult();}}>Debrebrhan</Link>
        <Link to="/gallery" onClick={() => {setCategorySelected("other"); toDefalult();}}>Other</Link>
    </div>
    }
  
    
  <Link onClick={()=>toDefalult()} to="/sponsorship">SponsorShip</Link>
<Link onClick={()=>toDefalult()} to='blogs'>Blog</Link>
<Link onClick={()=>toDefalult()} to='/contact'>Contact</Link>
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