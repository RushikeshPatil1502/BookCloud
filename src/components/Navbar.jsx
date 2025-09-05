function Navbar() {
  return (
    <nav className='flex justify-between py-4 px-4 sm:px-8 md:px-16 lg:px-36 bg-transparent text-white'>
       <h1 className='md:text-4xl sm:text-3xl font-bold'>📚 BookCloud</h1>

       <button className='border-b w-fit font-semibold py-1 sm:text-xl md:text-2xl hover:text-black'>
            Login
       </button>
    </nav>
  )
}

export default Navbar