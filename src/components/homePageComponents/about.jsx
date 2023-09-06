import React from 'react'

const About = () => {
  return (
    < div id='about' className='smoothScroll slg:grid grid-cols-2 p-7 md:p-14 text-gray-700  slg:space-x-4'>

<div>
  <div className='flex text-3xl sm:text-5xl font-semibold space-x-2'>
    <h1 className=''>Our</h1> <h1 className='text-sky-500 underline'>Story</h1>
    </div>

    <h1 className='text-2xl sm:text-4xl font-semibold py-6'>About the Organization</h1>
    <p className=''>The Magi Foundation is a local, charitable, non-for profit, non-governmental organization. Its inception was from Australian couple of Ethiopian origin whose true Passion for Supporting Children, brought two Ethiopians to found it and register in Ethiopia in April 2022.</p>

   <div className='flex space-x-4 pt-5'>
    <button className='border-2 border-sky-700 text-sky-700 rounded-full px-3 py-1
    hover:bg-sky-700 hover:text-white duration-150    '>Read More</button>
    <button className='text-white bg-sky-700 rounded-full px-3 py-2 
    hover:bg-sky-400 duration-150'>Check out Events</button>
    </div> 
</div>


<div className='my-auto pt-5'>
<h1 className='text-lg sm:text-xl font-bold '>
The name “Magi” is a Latin term reflecting on our desire to bring the light of hope to orphans, vulnerable children, and their guardians. We work with communities to support orphans and vulnerable children to reach their full potential as productive members of society.
</h1>
</div>

    </div>
  )
}

export default About;