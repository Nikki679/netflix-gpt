import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-10 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/2 text-sm py-6'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-lg rounded-md hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 mx-2 text-white p-4 px-8 text-lg rounded-md hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle