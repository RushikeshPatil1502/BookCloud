import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

function LandingHero() {
  return (
    <>
    <div className='flex flex-col w-screen h-screen bg-cover bg-center relative '
         style={{backgroundImage: "url(/Images/toa-heftiba-i0p916iq-ew-unsplash.jpg)"}}>
        <Navbar />
        <Hero />
    </div>
    <Features />
    <Footer />
    </>
  )
}

export default LandingHero