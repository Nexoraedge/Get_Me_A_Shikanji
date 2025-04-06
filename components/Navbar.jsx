"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Github from 'next-auth/providers/github'
const Navbar = () => {
  const {data:session} = useSession()

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className=' text-white  '>
   <div className=" blurkro rounded-full m-2 bg-blue-950/70 flex justify-between py-3 items-center px-5 ">
   <div className="logo font-bold flex text-xl items-center gap-2 sm:self-center">
    <img src="./pep.gif"  width={20} alt="shikanji" />
        <span>GetMEShikan</span>
      </div>
      {/* <ul className='hidden sm:flex justify-between gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Login</li>
        <li>Signup</li>
      </ul> */}
      <div>
      {session && <Link href={"/profile"}>
      <button  className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Profile
      </span>
    </button>
      </Link>  }
      {!session && <Link href={"/login"}>
      <button  className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Login
      </span>
    </button>
      </Link>  }
      {session && 
      <button onClick={() => signOut()} className='relative inline-flex h-6 sm:h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 sm:px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        LogOut
      </span>
    </button>
       }
       </div>
      
   </div>
    </nav>
  )
}

export default Navbar