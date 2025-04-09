"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"


const dashboard = () => {

  const { data: session } = useSession();
  if (!session) {
    const rounter = useRouter();
    rounter.push('/login')
  }

  return (
    <div className='flex justify-center w-full h-full '>
      <div className=" blurkr w-[90%]  md:w-[50%] rounded-xl my-10 px-4 space-y-5 py-7 sm:px-7">
        <h1 className='text-2xl w-full flex justify-center font-bold items-center'>Welcome to your Profile</h1>
        <div className="container">

          <div className='my-2'>
            <label htmlFor="name" className='block text-sm font-medium leading-6 '>Name</label>
            <input type="text" name='name' id='name' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="email" className='block text-sm font-medium leading-6 '>email</label>
            <input type="text" name='email' id='email' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="UserName" className='block text-sm font-medium leading-6 '>Username</label>
            <input type="text" name='UserName' id='UserName' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="Profile_PIC" className='block text-sm font-medium leading-6 '>Profile Picture</label>
            <input type="text" name='Profile_Pic' id='Profile_Pic' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="Cover_PIC" className='block text-sm font-medium leading-6 '>Cover Picture</label>
            <input type="text" name='Cover_PIC' id='Cover_PIC' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="RazorPay_ID" className='block text-sm font-medium leading-6 '>RazorPay_ID</label>
            <input type="text" name='RazorPay_ID' id='RazorPay_ID' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <div className='my-2'>
            <label htmlFor="RazorPay_Secret" className='block text-sm font-medium leading-6 '>RazorPay_Secret</label>
            <input type="text" name='RazorPay_Secret' id='RazorPay_Secret' className='block w-full p-2 text-sky-200 bg-gray-700/60 rounded-lg' />
          </div>

          <button class="relative my-2 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#02063b] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 w-full py-2.5 transition-all ease-in duration-75 hover:font-bold hover:scale-125">
              Save
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default dashboard
