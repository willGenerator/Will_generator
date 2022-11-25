import React from 'react'

function Card() {
  return (
    <>
    <div className='flex justify-center items-center h-full'>
    <div className='bg-[#000000] flex flex-row justify-center items-center w-2/4 rounded-3xl' >

    <div className='flex flex-col justify-center items-center px-7 py-7'>
        <h3 className=' text-white font-semibold text-3xl'>Name</h3>
        <h3 className=' text-white font-semibold text-3xl mb-5'>Value</h3>
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]'>Beneficiaries</h3>
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00D9F5] mb-6'>Value</h3>
        <h3 className=' text-white font-black text-2xl'>Possessions</h3>
        <h3 className=' text-white font-black text-2xl'>Value</h3>
    </div>
    </div>
    </div>
    </>
  )
}

export default Card