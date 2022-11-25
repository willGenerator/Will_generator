import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import WillPage from '../../pages/WillPage/Index';

function home() {
  const [form, setForm] = useState({
    name: '',
    beneficiary: '',
    possessions: ''
  })
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  const validateForm = () => {
    const {name, beneficiary, possessions} = form
    const newErrors = {}

    if(!name || name === '') 
    newErrors.name = 'Please enter an name'

    if(!beneficiary || beneficiary === '') 
    newErrors.beneficiary = 'Please choose a beneficiary'

    if(!possessions || possessions === '')
    newErrors.possessions = 'Please pick a possessions'

  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    if(Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }else{
      console.log('Form is submitted');
      console.log(form);
    }
    console.log(form);
    <WillPage name={name} possessions={possessions} beneficiary={beneficiary} />
  }
  return (

   <div className=" h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative lg:w-[800px] md:w-[600px] w-[350px] rounded-md bg-white shadow-sm shadow-[#A855F7]  px-8 pt-6 pb-8 mb-4">
         <form className="rounded mt-4" onSubmit={handleSubmit}>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="name">
            Name
          </label>
          <input onChange={(e)=>setField('name',e.target.value)} className={!!errors.name ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="name" value={form.name} isInvalid={!!errors.name} type="text" placeholder="Name"/>
          <p className="text-sm text-red-600">{errors.name}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="text">
          Beneficiary
          </label>
          <input onChange={(e)=>setField('date',e.target.value)} className={!!errors.beneficiary ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="beneficiary" value={form.beneficiary} isInvalid={!!errors.beneficiary} type="text" placeholder="Beneficiary"/>
          <p className="text-sm text-red-600">{errors.beneficiary}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="possessions">
            Possessions
          </label>
          <input onChange={(e)=>setField('possessions',e.target.value)} className={!!errors.possessions ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="possessions" value={form.possessions} isInvalid={!!errors.possessions} type="possessions" placeholder="Enter your possessions"/>
          <p className="text-sm text-red-600">{errors.possessions}</p>
        </div>

          <div className="flex items-center justify-center place-items-center">

      <button>
         <Link to={name} className="rounded relative inline-flex group items-center justify-center lg:px-[50px] md:px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Generate your will</span>
        </Link>
      </button>
          </div>

         </form>
      </div>    
   </div>


  
  )
}

export default home