import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function LandingPage() {
  return (
    <div className='flex flex-col w-screen h-screen bg-cover bg-center relative '
         style={{backgroundImage: "url(/Images/toa-heftiba-i0p916iq-ew-unsplash.jpg)"}}>
        <Navbar />
        <Main />
    </div>
  )
}

export default LandingPage