import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center gap-5 items-center h-[43vh]">
         <div className="font-bold text-3xl flex gap-1 justify-center">Get Me Shikanji <span><img width={80} src="./pep.gif" alt="" /></span></div>
         <p>
          crowd funding platform for creative projects . Get funded by like minded people  , Fans and  Investors.
          Start your project now!
         </p>
         <div>
         <button className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Start Now
      </span>
    </button>
         <button className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Read More
      </span>
    </button>
         </div>
      </div>
      <div className="bg-white h-1 opacity-15">
        
      </div>
      </>
  );
}
