import React from 'react';
import Logo from '../../assets/images/logo/themagilogo1.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

 const setCategorySelected = props.setCategorySelected;

  return (
    <div className='fixed z-50 w-full '>
    <div className='flex justify-around bg-blue-900 text-white py-3  '>

<div className='my-auto flex'>
    <img className='w-8' src={Logo} alt="" />
   <h1 className='my-auto pl-5 text-2xl font-semibold text-sky-400'> The Magi Foundation </h1>
</div>

<div className='space-x-10 my-auto  flex'>
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




<div className='bg-sky-600 px-4 py-2 rounded-3xl'>
    <button>Donate</button>
</div>

    </div>

  
    </div>
  )
}

export default Navbar;