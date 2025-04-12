import Paymentpage from '@/components/Paymentpage'
import React from 'react'

const UserName = async({ params }) => {
  const { username } = params
  
  return (
    <>
      <Paymentpage username={username} />
    </>
  )
}

export default UserName