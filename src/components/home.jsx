import React from 'react'

function home() {
  return (
    <div>
          <form className="rounded mt-4">

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="event">
                    Event
                </label>
                <input onChange={(e)=>setField('event',e.target.value)} className={!!errors.event ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="event" value={form.event} isInvalid={!!errors.event} type="text" placeholder="Event"/>
                <p className="text-sm text-red-600">{errors.event}</p>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="date">
                    Date
                </label>
                <input onChange={(e)=>setField('date',e.target.value)} className={!!errors.date ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="date" value={form.date} isInvalid={!!errors.date} type="date" placeholder="Date"/>
                <p className="text-sm text-red-600">{errors.date}</p>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="time">
                    Time
                </label>
                <input onChange={(e)=>setField('time',e.target.value)} className={!!errors.time ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="time" value={form.time} isInvalid={!!errors.time} type="time" placeholder="Time"/>
                <p className="text-sm text-red-600">{errors.time}</p>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start" for="reason">
                    Reason
                </label>
                <textarea onChange={(e)=>setField('reason',e.target.value)} className={!!errors.reason ? 'border-[#F83F23] shadow appearance-none border rounded w-full py-2 px-3 text-red-600 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} id="reason" value={form.reason} isInvalid={!!errors.reason} rows="4" cols="50"  type="text" placeholder="Reason for event..."></textarea>
                <p className="text-sm text-red-600">{errors.reason}</p>                
                </div>

                <a onClick={handleSubmit} href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#178dc4] rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#178dc4] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#117bad] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">View Countdown</span>
                </a>
                </form>
    </div>
  )
}

export default home