import React from 'react'

const UserName = async ({ params }) => {
  console.log(await params.username)
  return (
    <>
      <div className='w-full h-[44vh] relative '>
        <img className='w-full  object-cover h-[44vh]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4977505/2f449051e8704befa3b13e91cf5aeed9/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/7.png?token-time=1746316800&token-hash=-hD5HNqHv4rQXNkrv9bBazVka_HtSSYY3CAtSpt2tZA%3D" alt="bACKGROUND pOSTER" />
        <div className='absolute  object-cover  -bottom-12 right-[46.2%]'>

          <img className='w-28 h-28 rounded-full border border-[2px] border-sky-100' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/7590945/26655306517446abb46b610ce075ed4a/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpeg?token-time=1745366400&token-hash=ssRQQOHgAKmA6EJrRKrKIFU9vrRksVNinfMDcdNFUG4%3D" alt="pROFILE_pic" />
        </div>
      </div>
      <div className="info flex flex-col gap-2.5 justify-center items-center my-16 w-full">
        <div className='font-bold text-xl '>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          creating Art and Animations
        </div>
        <div className='text-center text-sm tracking-tight text-slate-400'>
          187 paid members • 118 Posts • $959,4/month
        </div>
        <div className="payment flex mt-10 gap-3 w-[80%]">
          <div className="supporters w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
            {/* Show list oh2f the all the supporters as a leaderboard. */}
            <h2 className='font-semibold text-xl my-5'>Supporters</h2>
            <ul className='px-2.5 space-y-2'>
              <li>Shubham donated $30 with a message ""</li>
              <li>Shubham donated $30 with a message ""</li>
              <li>Shubham donated $30 with a message ""</li>
              <li>Shubham donated $30 with a message ""</li>
              <li>Shubham donated $30 with a message ""</li>
              <li>Shubham donated $30 with a message ""</li>
            </ul>
          </div>
          <div className="makepayment w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
            <h2 className='font-semibold text-xl my-5'>Support Us</h2>
            <div className="flex gap-2">
              <input type="text" placeholder='Enter Amount' className='w-full p-3 bg-slate-800  rounded-lg ' />
              <button className='bg-slate-700 p-3 rounded-lg'>Pay</button>
            </div>
            {/* orr schoose from these amount  */}
            <div className="flex gap-2 mt-4">
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$10</button>
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$20</button>
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$30</button>
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$40</button>
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$30</button>
               <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>$30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserName
