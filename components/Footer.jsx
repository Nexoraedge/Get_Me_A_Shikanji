import React from 'react'

const Footer = () => {
  const curretYear = new Date().getFullYear();
  return (
    <footer className='relative w-full text-sm  bottom-0 bg-blue-950/50 text-neutral-400 items-center flex justify-center px-3 py-1 h-10'>
        <p className='mx-auto'><span className='text-neutral-300/80  font-medium'>Copy &copy; {curretYear}</span> Get me a Shikanji 🍋 - <span className='block ml-13 sm:ml-0 sm:inline'> All rights reserved</span></p>
    </footer>
  )
}
export default Footer;
       