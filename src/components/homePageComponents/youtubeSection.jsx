import React from 'react'

const YoutubeSection = () => {
  return (
    <div className='hidden lg:block bg-blue-700 bg-opacity-80 shadow-xl shadow-blue-700'>
        <div className='grid grid-cols-3 w-fit py-10 mx-auto gap-14 px-5'>

            <div className='group rounded-xl overflow-hidden relative'>
                <div className='h-4 w-full bg-sky-500 absolute top-0 z-50'></div>
                <div className='h-4 group-hover:h-2 w-full bg-sky-500 absolute bottom-0 z-50'></div>
            <iframe className='hover:scale-105 duration-300' width="300" height="200" src="https://www.youtube.com/embed/49WLI0A5hHk" title="The Magi Visitation in Debreberhane" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='group rounded-xl overflow-hidden relative '>
            <div className='h-4 w-full bg-sky-500 absolute top-0 z-50'></div>
                <div className='h-4 group-hover:h-2 w-full bg-sky-500 absolute bottom-0 z-50'></div>
            <iframe className='hover:scale-105 duration-300 bg-green-200' width="300" height="200" src="https://www.youtube.com/embed/XrFqIntttLQ" title="Educational Facility support in Adama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='group rounded-xl overflow-hidden relative'>
                <div className='h-4 w-full bg-sky-500 absolute top-0 z-50'></div>
                <div className='h-4 group-hover:h-2 w-full bg-sky-500 absolute bottom-0 z-50'></div>
            <iframe className='hover:scale-105 duration-300' width="300" height="200" src="https://www.youtube.com/embed/49WLI0A5hHk" title="The Magi Visitation in Debreberhane" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          
        </div>
    </div>
  )
}

export default YoutubeSection;