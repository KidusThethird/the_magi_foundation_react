import React from 'react';
import Logo from '../assets/images/logo/themagilogo1.png'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-blue-900 text-white py-3'>

<div className='my-auto flex'>
    <img className='w-8' src={Logo} alt="" />
   <h1 className='my-auto pl-5 text-2xl font-semibold text-sky-400'> The Magi Foundation </h1>
</div>

<div className='space-x-10 my-auto'>
<a href="">Home</a>
<a href="">About</a>
<a href="">Events</a>
<a href="">Gallery</a>
<a href="">Sponsorship</a>
<a href="">Blog</a>
<a href="">Contact</a>
</div>

<div className='bg-sky-600 px-4 py-2 rounded-3xl'>
    <button>Donate</button>
</div>

    </div>
  )
}

export default Navbar;