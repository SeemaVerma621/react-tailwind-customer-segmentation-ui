const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-3">
      <button className='bg-black text-white px-5 sm:px-10 py-2 sm:py-3 text-sm sm:text-xl rounded-full uppercase'>Target Audience</button>
      <button className='bg-gray-300 text-black px-5 sm:px-10 py-2 sm:py-3 text-sm sm:text-xl rounded-full uppercase font-semibold tracking-wider
'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
