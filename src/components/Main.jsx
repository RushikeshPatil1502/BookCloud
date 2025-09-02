import React from 'react'

function Main() {
  return (
    <div className='flex justify-around items-center px-36'>
        <div className='w-[614px] h-[408px] shadow-2xl flex justify-center items-center'>
             <img className='max-w-full max-h-full object-contain' src="/Images/HeadphoneBook.webp" alt="Book Cover" />
        </div>

        <div className='text-white flex flex-col text-left items-left justify-between gap-14 w-[600px]'>
           <h1 className='text-6xl leading-tight font-bold'>Bring Your Books to Life Without the Effort</h1>

           <div className='flex flex-col gap-4'>
                <p className='text-lg max-w-2xl leading-relaxed'>
                    With AI-powered book-to-audiobook conversion, you can transform any printed page into clear, natural narration in just minutes.
                </p>
                <p className='text-lg max-w-2xl leading-relaxed'>
                    With AI-powered book-to-audiobook conversion, you can transform any printed page into clear, natural narration in just minutes.
                </p>
                <p className='text-lg max-w-2xl leading-relaxed'>
                    Your personal audiobook library is only a few clicks away. Upload your book, add a cover, and let our AI do the rest.
                </p>
                <p className='text-lg max-w-2xl leading-relaxed'>
                    🎧 Start your journey today—turn reading into listening.
                </p>
           </div>

           <button className='px-8 py-2 bg-white text-black font-semibold w-fit'>
            Get Started
           </button>
           
        </div>
    </div>
  )
}

export default Main