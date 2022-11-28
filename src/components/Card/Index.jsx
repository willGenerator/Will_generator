import React, { useContext } from 'react'
import { UserContext } from '../../App'

function Card() {

  const {name,setName, beneficiary,setBeficiary, possessions,setPossessions} = useContext(UserContext)

  return (
    <>
    <div className='flex justify-center items-center w-full '>
        
    <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 flex flex-row justify-center items-center w-full rounded-3xl' >
    <div className='flex flex-col justify-center items-center px-7 py-7 gap-[20px] lg:h-[500px]'>
      {/* <div className='bg-[#a855f7] px-9 py-9 rounded-full mb-6'>
      <div className='flex flex-row justify-center items-center'><figure className='w-[56px] max-[578px]:w-6'><img className='w-full' src="../assets/logo.svg" alt="" /></figure><span className=' font-semibold text-5xl text-white max-[578px]:text-2xl'>YourWill:{name}</span></div>
      </div> */}
    <div className="flex gap-3">
        <h3 className=' text-white font-semibold text-3xl max-[578px]:text-2xl'>Name:</h3>
        <h3 className=' text-white font-semibold text-3xl mb-5 max-[578px]:text-2xl'>{name}</h3>
      </div>
        
      <div className="flex gap-3">
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] max-[578px]:text-3xl'>Beneficiaries:</h3>
        <h3 className=' font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] mb-6 max-[578px]:text-3xl'>{beneficiary}</h3>
       </div>

       <div className="flex gap-3">
        <h3 className=' text-white font-black text-2xl max-[578px]:text-lg'>Possessions:</h3>
        <h3 className=' text-white font-black text-2xl max-[578px]:text-lg'>{possessions}</h3>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
Card.defaultProps = {
  name: "Johnny",
  beneficiary: "Jack",
  possessions: "Crypto,building,land"
}


export default Card