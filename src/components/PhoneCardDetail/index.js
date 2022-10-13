import React from 'react'

const PhoneCardDetail = () => {
  return (
    <>
    <h1 className='absolute py-3 text-2xl m-10 md:text-4xl font-bold'>PhoneModel</h1>
     <div className='bg-gray-200 w-full min-h-screen flex justify-start items-center shadow-lg hover:shadow-2xl '>
         <div className='w-80 h bg-zinc-200/20 rounded-xl m-32'>
               <img className='rounded-lg' src="https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp" alt="/"></img>
               <div className='p-2'></div>
               <h2 className='font-bold text-lg'> PhoneName </h2>
               <p className='text-sm text-gray-600'>Description of the Phone</p> 
               <p className='text-sm text-gray-600'>Price</p> 
               <div className='mt-1'>
               <button className='text-white bg-purple-600 px-3 py-'>Add to your cart</button>
             </div>
         </div>
    </div>
     </>
  )
}

export default PhoneCardDetail