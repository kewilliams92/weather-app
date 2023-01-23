import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Monday, 20 January 2023 | Local time: 4:20 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-2xl font-medium'>
                Raleigh, NC
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation