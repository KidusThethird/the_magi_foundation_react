import React from 'react'
import  {TeamMembers}  from '../../utils/teamMembers'

const TeamList = () => {
  return (
    <div className='pt-16'>

        <div className='text-4xl font-semibold flex w-fit mx-auto pt-5 space-x-2'>
            <h1 className='text-gray-700'>Our</h1>
            <h1 className='text-sky-700 underline'>Team</h1>
        </div>

<div className='py-8 px-2 md:px-20'>

{TeamMembers.map((member)=>{
    
   return <div className=' slg:grid grid-cols-3 w-full  bg-sky-700 mb-6 text-gray-200 rounded-3xl shadow-lg shadow-sky-400'>
    <div className='col-span-1  '>
        <div className='w-3/4 sm:w-1/2 pt-10 pb-3 px-10 slg:w-3/4 mx-auto'>
    <img className=' md:w-full shadow-2xl shadow-black rounded-lg' src={member.image} alt="" />
    </div>
    <h1 className='text-center pb-5 ' >{member.name}</h1>
    </div>

    <div className='my-auto col-span-2 px-4 '>
    <h1 className='text-gray-100 font-semibold text-lg pb-2'>{member.position}</h1>
    <p>{member.description}</p>
    </div>
    
    </div>

})}
</div>
   
</div>


  )
}

export default TeamList