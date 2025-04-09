"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Github from 'next-auth/providers/github'
const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className=' text-white  '>
      <div className=" blurkro rounded-full m-2 bg-blue-950/70 flex justify-between py-3 items-center px-5 ">
        <Link href={"/"}>
          <div className="logo font-bold flex text-xl items-center gap-2 sm:self-center">
            <img src="./pep.gif" width={20} alt="shikanji" />
            <span>GetMEShikan</span>
          </div >
        </Link>
        {/* <ul className='hidden sm:flex justify-between gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Login</li>
        <li>Signup</li>
      </ul> */}
        <div className='text-center'>{
          session &&
          <>

            <button onClick={() => { setShowDropdown(!showDropdown) }}
            onMouseEnter={() => { setShowDropdown(true) }}
            onMouseOut={() => {setTimeout(() => { setShowDropdown(false) }, 2000)}}
              onBlur={() => {
                setTimeout(() => {
                  setShowDropdown(false);
                }
                );
              }
              }
              id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-3 cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={` z-10 ${showDropdown ? "" : "hidden"}   bg-white divide-y divide-gray-100 rounded-lg z-30 absolute shadow-sm w-44 dark:bg-gray-700 `}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                </li>
                <li>
                  <Link href={"/setting"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                </li>

                <li>
                  <button onClick={() => signOut()} className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                </li>
              </ul>
            </div>
          </>
        }

          {!session && <Link href={"/login"}>
            <button className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                Login
              </span>
            </button>
          </Link>}

        </div>

      </div>
    </nav>
  )
}

export default Navbar