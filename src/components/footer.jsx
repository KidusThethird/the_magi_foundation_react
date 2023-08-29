import React from 'react'
import Logo from '../assets/images/logo/themagilogo1.png'

const Footer = () => {
  return (
    <div className='bg-blue-950'>
        <div className='grid grid-cols-4 px-10 py-10'>
            <div>
                <img src={Logo} className='w-1/2 pb-7' alt="" />
                <h1 className='text-white font-semibold  text-xl'>The Magi Foundatioon</h1>
            </div>

            <div className='space-y-4'>
                <h1 className='text-sky-300 text-2xl font-semibold'>Bank Acount</h1>
                <h1 className='text-gray-400 text-lg'>Birhan Bank - 2501730118682</h1>
            </div>

            <div className='text-gray-400 space-y-4'>
                <h1 className='text-sky-300 text-2xl font-semibold'>About Us</h1>
                <h1>Who We are</h1>
                <h1>Donate</h1>
                <h1>Volunteer</h1>
                
            </div>

            <div className='text-gray-400 space-y-4'>
                <h1 className='text-sky-300 text-2xl font-semibold'>Contact</h1>
                <h1>Bole, Addis Ababa</h1>
                <h1>Ethiopia +251-978785006</h1>
                <h1>Australia +61-422088825</h1>
                <h1>Australia +61-431405042</h1>
                <h1>USA +1-5719770815</h1>
                <h1>info@themagifoundation.org</h1>
            </div>
            
        </div>

        <div className=' flex '>
            <h1 className='text-white mb-10 text-center w-full bg-blue-700 py-3'>The Magi Foundation</h1>
        </div>

    </div>
  )
}

export default Footer