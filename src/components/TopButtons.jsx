import React from 'react'

function TopButtons() {
    const cities = [
        { id: 1, name: 'New York' },
        { id: 2, name: 'London' },
        { id: 3, name: 'Paris' },
        { id: 4, name: 'Tokyo' },
        { id: 5, name: 'Hong Kong' },
        { id: 6, name: 'Kuwait' },
        { id: 7, name: 'Moscow' },
    ]


  return (
    <div className="flex items-center justify-center my-6">
        {cities.map((city) => (

            <button key={city.id} className="text-white text-lg font-medium">
                {city.name}
            </button>
        ))}
    </div>
  )
}

export default TopButtons