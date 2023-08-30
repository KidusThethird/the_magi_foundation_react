import React from 'react'
import CoverImage from '../../assets/images/banner/magi_banner_03.jpg'

function ContactUsForm() {
  return (
    <div  style={{
        backgroundImage: `url(${CoverImage})`, 
        backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundAttachment: 'fixed' }}
         
         className='flex'>
     <div className='mx-auto py-20'>
        <div className='bg-blue-950 text-white flex rounded-t-3xl'>
            <h1 className='mx-auto py-6 text-3xl font-semibold'>Contact Us</h1></div>
        <div className='px-10 bg bg-gray-300 rounded-b-2xl shadow-lg shadow-sky-600'>
            <form action="">
            <div className="space-x-20 py-5">
                <input className='p-3 rounded-lg focus:outline-sky-500' type="text" placeholder='Name' />
                <input className='p-3 rounded-lg focus:outline-sky-500' type="text" placeholder='Email'/>
                <input className='p-3 rounded-lg focus:outline-sky-500' type="text" placeholder='Subject'/>
            </div>
            <div className=''>
               <textarea className='w-full p-5 focus:outline-sky-500 rounded-xl'  type="text" rows="5" name="" id="" placeholder='Message'></textarea> 
            </div>
            <div className='py-8'>
                
            <button className='w-full  rounded-full font-semibold text-white bg-sky-500 py-3'>Submit</button>
            </div>
            </form>
        </div>
     </div>
    </div>
  )
}

export default ContactUsForm;