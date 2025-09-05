import React from 'react'

function FeatureCards({title , icon , description}) {
  return (
    <div className='flex flex-col items-center hover:shadow-lg cursor-pointer bg-white p-4 rounded-lg shadow-md'>
         <div className='text-3xl font-bold mb-4'>{icon}</div>
         <h3 className='text-2xl font-bold mb-2'>{title}</h3>
         <p className='text-lg font-semibold'>{
            description.map((point , i) => 
            <li className='text-gray-600 list-none' key={i}>
               {point}
            </li>
            )
            }</p>
    </div>
  )
}

export default FeatureCards