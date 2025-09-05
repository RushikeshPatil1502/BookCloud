import React from 'react'

function Hero() {
  return (
    <div>
        <div className="flex flex-col mt-16 lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-36 gap-8">
          
          <div className="w-full max-w-[614px] shadow-2xl flex justify-center items-center">
            <img className="w-full h-auto object-contain" src="/Images/HeadphoneBook.webp" alt="Book Cover" />
          </div>

          <div className="text-white flex flex-col gap-6 w-full lg:w-[600px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
              Bring Your Books to Life Without the Effort
            </h1>

            <div className="flex flex-col gap-4 text-base sm:text-lg">
              <p>With AI-powered book-to-audiobook conversion, ...</p>
              <p>Your personal audiobook library is only a few clicks away...</p>
              <p>🎧 Start your journey today—turn reading into listening.</p>
            </div>

            <button className="px-6 py-2 bg-white text-black font-semibold w-fit text-sm sm:text-base md:text-lg">
              Get Started
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero
