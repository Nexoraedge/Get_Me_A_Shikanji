
import React from 'react'


const UserName = async ({ params }) => {
  
  
  return (
    <>
      <div className='w-full h-[44vh] relative '>
        <img className='w-full  object-cover h-[44vh]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4977505/2f449051e8704befa3b13e91cf5aeed9/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/7.png?token-time=1746316800&token-hash=-hD5HNqHv4rQXNkrv9bBazVka_HtSSYY3CAtSpt2tZA%3D" alt="bACKGROUND pOSTER" />
        <div className='absolute  object-cover  -bottom-12 right-[50%] translate-x-[50%]'>

          <img className='w-28 h-28 rounded-full border border-[2px] border-sky-100' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/7590945/26655306517446abb46b610ce075ed4a/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpeg?token-time=1745366400&token-hash=ssRQQOHgAKmA6EJrRKrKIFU9vrRksVNinfMDcdNFUG4%3D" alt="PROFILE_pic" />
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
        <div className="payment flex flex-col sm:flex-row mt-10 gap-3 w-[95%] md:w-[85%] xl:[80%]">
          <div className="supporters w-full sm:w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
            {/* Show list oh2f the all the supporters as a leaderboard. */}
            <h2 className='font-semibold text-xl my-5'>Supporters</h2>
            <ul className='px-2.5  '>
              <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                <span>Shubham Donated <span className='  font-bold'>$30</span> with a message "I am a fan  , Love You"</span>
              </li>
              <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                <span>Shubham Donated <span className='  font-bold'>$30</span> with a message "I am a fan  , Love You"</span>
              </li>
              <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                <span>Shubham Donated <span className='  font-bold'>$30</span> with a message "I am a fan  , Love You"</span>
              </li>
              <li className='flex items-center py-2.5 gap-x-2'> <img className='w-7 p-1 blurkr rounded-full h-fit' src="./profile.gif" alt="profile_pic" />
                <span>Shubham Donated <span className='  font-bold'>$30</span> with a message "I am a fan  , Love You"</span>
              </li>

            </ul>
          </div>
          <div className="makepayment w-full sm:w-1/2 rounded rounded-br-2xl rounded-tl-2xl py-11 px-9 blurkr">
            <h2 className='font-semibold text-xl my-5'>Support Us</h2>
            <div className="flex flex-col gap-2">
              <input type="text"   placeholder='Enter Name' className='w-full p-3 bg-slate-800  rounded-lg ' />
              <input type="text" placeholder='Enter Message' className='w-full p-3 bg-slate-800  rounded-lg ' />
              <input type="text" placeholder='Enter Amount' className='w-full p-3 bg-slate-800  rounded-lg ' />
              {/* <button className='bg-slate-700 p-3 rounded-lg hover:scale-95 transition-all  hover:bg-slate-600/80 hover:font-bold hovertext-lg'>Pay</button> */}
              <button  className="relative text-lg inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#010225] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-colors ease-in duration-150 bg-white dark:bg-gray-800  rounded-md w-full group-hover:bg-transparent group-hover:dark:bg-transparent hover:from-0% hover:to-100%">
                  Pay 💸
                </span>
              </button>
            </div>
            {/* orr schoose from these amount  */}
            <div className="flex gap-2 mt-4">
              <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>Pay $50</button>
              <button className='bg-slate-800 p-3 rounded-lg text-slate-200'>Pay $100</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserName
