import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row justify-center items-center bg-[#a855f7]'>
        <div className='flex flex-row justify-center items-center'><figure className='w-[56px] max-[578px]:w-6'><img className='w-full' src="../assets/logo.svg" alt="" /></figure><span className=' font-semibold text-5xl text-white max-[578px]:text-2xl'>YourWill</span></div>
    </div>
  )
}

export default NavBar