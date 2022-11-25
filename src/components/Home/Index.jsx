import React, { useState, useContext } from 'react'
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
function home() {

  const {name,setName,beneficiary, setBeneficiary,possessions, setPossessions} = useContext(UserContext)
  const Navigate = useNavigate()

  const [error, setError] = useState(false);

  const handleSubmit=(e) => {
    e.preventDefault();
    if(name.length === 0 || beneficiary.length === 0|| possessions === 0){
      setError(true)
    }
    console.log(name)
    Navigate("/will")
   }

  return (

   <div className=" h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative lg:w-[800px] md:w-[600px] w-[350px] rounded-md bg-white shadow-sm shadow-[#A855F7]  px-8 pt-6 pb-8 mb-4">
         <form className="rounded-md" onSubmit={handleSubmit}>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="name">
              Name
            </label>
            <input onChange={e =>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            {error && name.length<=0? 
            <p className="text-sm text-red-600">Please enter your name.</p>
            : ""}
            </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="text">
            Beneficiary
            </label>
            <input onChange={e =>setBeneficiary(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            {error && beneficiary.length<=0? 
            <p className="text-sm text-red-600">Please enter your beneficiary</p>
            : ""}
            </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="possessions">
              Possessions
            </label>
            <input onChange={e =>setPossessions(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            {error && possessions.length<=0? 
            <p className="text-sm text-red-600">Please enter your possessions</p>
            : ""}
            </div> 

          <div className="flex items-center justify-center place-items-center">

            <button type="submit">
              <a href="#_" className="rounded relative inline-flex group items-center justify-center lg:px-[50px] md:px-[30px] px-[20px] py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative">Generate your will</span>
              </a>
            </button>
          </div>

         </form>
      </div>    
   </div>


  
  )
}

export default home