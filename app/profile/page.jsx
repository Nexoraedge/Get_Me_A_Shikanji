"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"


const profile = () => {
  
 const {data:session} =useSession();
     if(!session) {
         const rounter = useRouter();
         rounter.push('/login')
       }

  return (
    <div>
      profile
    </div>
  )
}

export default profile
