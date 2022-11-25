import React from 'react'

function Card(props) {
  return (
    <>
    <div className='flex justify-center items-center w-full'>
        
    <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 flex flex-row justify-center items-center w-full rounded-3xl' >
    <div className='flex flex-col justify-center items-center px-7 py-7'>
        <h3 className=' text-white font-semibold text-3xl max-[578px]:text-2xl'>Name</h3>
        <h3 className=' text-white font-semibold text-3xl mb-5 max-[578px]:text-2xl'>Value</h3>
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] max-[578px]:text-3xl'>Beneficiaries</h3>
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] mb-6 max-[578px]:text-3xl'>Value</h3>
        <h3 className=' text-white font-black text-2xl max-[578px]:text-lg'>Possessions</h3>
        <h3 className=' text-white font-black text-2xl max-[578px]:text-lg'>Value</h3>
    </div>
    </div>
    </div>
    </>
  )
}


export default Card