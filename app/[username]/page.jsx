import Paymentpage from '@/components/Paymentpage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDB'
import User from '@/models/user'

const UserName = async ({ params }) => {
  // Check if user exists in database
  const checkuser = async () => {
    await connectDB();
    
    // Case inconsistency: In the query you use "username" but in the model it's "UserName"
    let u = await User.findOne({ UserName: params.username });
    console.log("User lookup result:", u);
    
    if (!u) {
      return false;
    }
    return true;
  }
  
  // Check if user exists, if not return 404
  const userExists = await checkuser();
  if (!userExists) {
    notFound();
  }
  
  return (
    <>
      {/* Case inconsistency: You use lowercase "username" here but the params has "Username" */}
      <Paymentpage username={params.username} />
    </>
  )
}

export default UserName