function Navbar() {
  return (
    <nav className='flex justify-between px-36 py-18 bg-transparent text-white'>
       <h1 className='text-4xl font-bold'>📚 BookCloud</h1>

       <button className='border-b w-fit font-semibold py-1 text-2xl hover:text-black'>
            Login
       </button>
    </nav>
  )
}

export default Navbar