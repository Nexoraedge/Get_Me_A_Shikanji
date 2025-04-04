"use client"
import React, { useState } from 'react'

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
         <button 
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-white focus:outline-none"
      >
        hlo
      </button>

     
      <div className={`sm:hidden absolute top-full left-0 w-full bg-black p-4 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className='flex flex-col gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
    </div>
  )
}

export default Burger