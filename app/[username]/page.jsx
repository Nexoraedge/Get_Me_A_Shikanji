import React from 'react'

const UserName = ({params}) => {
    console.log(params.username)
  return (
    <div className='mx-auto container '>
      {params.username}
    </div>
  )
}

export default UserName
