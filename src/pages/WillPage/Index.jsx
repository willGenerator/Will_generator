import React from 'react'
import Card from '../../components/Card/Index'

function WillPage({name,possessions,beneficiary}) {
  return (
    <div className='flex justify-center items-center h-[88vh] max-w-6xl w-4/5 mx-auto my-0 max-[578px]:w-[95%]'>
        <Card  name={name} possessions={possessions} beneficiary={beneficiary} />
    </div>
  )
}

export default WillPage