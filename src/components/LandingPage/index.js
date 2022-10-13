import React from 'react'

const Landing = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-300'>Phone</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-yellow-300'>That</span> you need</h1>
        </div>
            <img className='w-full max-h-[500px] object-cover' src="https://cdn.pixabay.com/photo/2017/07/15/19/42/train-track-2507499_960_720.jpg" alt="/" />
        </div>
    </div>
    )
}


export default Landing