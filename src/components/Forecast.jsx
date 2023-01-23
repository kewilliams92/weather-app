import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                {title}
            </p>
        </div>
        <hr className='my-2' />
        <div className="flex flex-row items-center justify-between text-white">
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt="weather icon" className='w-10 h-10' />
                <p className='font-light text-sm'>
                    20°
                </p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white">
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt="weather icon" className='w-10 h-10' />
                <p className='font-light text-sm'>
                    20°
                </p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white">
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt="weather icon" className='w-10 h-10' />
                <p className='font-light text-sm'>
                    20°
                </p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white">
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt="weather icon" className='w-10 h-10' />
                <p className='font-light text-sm'>
                    20°
                </p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white">
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://www.weatherbit.io/static/img/icons/c04d.png" alt="weather icon" className='w-10 h-10' />
                <p className='font-light text-sm'>
                    20°
                </p>
            </div>
        </div>
    </div>
  )
}

export default Forecast