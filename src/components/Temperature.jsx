import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilWind, UilTear, UilSun, UilSunset } from '@iconscout/react-unicons'

function Temperature() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>

        <div className='flex items-center justify-between py-3  text-white'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
            <p className="text-5xl">
                20°
            </p>
            <div className='flex flex-col space-y-2'>
                <div className='flex-font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real Fell:
                    <span className='font-medium ml-1'>
                        20°
                    </span>
                </div>
                <div className='flex-font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='font-medium ml-1'>
                        65%
                    </span>
                </div>
                <div className='flex-font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind Speed::
                    <span className='font-medium ml-1'>
                        5.7 km/h
                    </span>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between py-3 text-white'>
            <UilSun />
            <p className='text-2xl font-light'> Rise: <span className='font-medium ml-1'>06:58am</span></p>
            <p className='font-light'></p>
        </div>
        <div className='flex items-center justify-between py-3 text-white'>
            <UilSunset />
            <p className='text-2xl font-light'> Set: <span className='font-medium ml-1'>18:58pm</span></p>
            <p className='font-light'></p>
        </div>
        <div className='flex items-center justify-between py-3 text-white'>
            <UilSun />
            <p className='text-2xl font-light'> Rise: <span className='font-medium ml-1'>06:58am</span></p>
            <p className='font-light'></p>
        </div>
    </div>
  )
}

export default Temperature