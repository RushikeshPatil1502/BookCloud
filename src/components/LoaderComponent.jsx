import React from 'react'
import { FallingLines } from 'react-loader-spinner'

function LoaderComponent() {
  return (
    <div className='flex justify-center items-center h-screen'>
          <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
        />
    </div>
  )
}

export default LoaderComponent