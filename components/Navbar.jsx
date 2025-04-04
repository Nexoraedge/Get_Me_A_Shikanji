import React from 'react'

const Navbar = () => {
  

  return (
    <nav className=' text-white  '>
   <div className=" blurkro rounded-full m-2 bg-blue-950/70 flex justify-between py-3 items-center px-5 ">
   <div className="logo font-bold text-3xl">
        GetMEShikan
      </div>
      
     

     
      <ul className='hidden sm:flex justify-between gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
   </div>
    </nav>
  )
}

export default Navbar