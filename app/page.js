import Image from "next/image";
import Link from "next/link";

export default function Home() {

   
  
  return (
    <>
    <div className="flex flex-col mx-3 justify-center gap-5 items-center h-[40vh]">
         <div className="font-bold gap-5 text-3xl flex items-center justify-center">Get Me Shikanji <span><img width={40} src="./pep.gif" alt="Shikanji" /></span></div>
         <p className=" text-center">
          crowd funding platform for creative projects . Get funded by like minded people  , Fans and  Investors.
          Start your project now!
         </p>
         <div>
          <Link href={"/login"}>
         <button className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Start Now
      </span>
    </button>
    </Link>
    <Link href={"/about"} >
         <button className='relative inline-flex h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Read More
      </span>
    </button>
    </Link>
         </div>
      </div>
      <div className="bg-white h-1 opacity-15">      </div>
      <div className="container mb-7 mx-auto">
        <h2 className="text-xl font-bold text-center my-3 py-7">Your Fans can buy you a Shikanji 🍋</h2>
        <div className="flex gap-5 justify-around  ">
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100} className=" bg-slate-400/60 rounded-full p-1" src="./deve.gif" alt="developer" / >
            <p className=" font-medium sm:font-bold text-sm sm:text-base">Fund yourself</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100} className=" bg-slate-400/60 rounded-full p-1" src="./coin.gif" alt="developer" / >
            <p className=" font-medium sm:font-bold text-sm sm:text-base">Fund yourself</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100}  className=" bg-slate-400/60 rounded-full p-1 " src="./group.gif" alt="developer" / >
            <p className=" font-medium sm:font-bold text-sm sm:text-base">Fans want to help</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
        </div>
        </div>
      <div className="bg-white h-1 opacity-15">      </div>
      <div className="container mb-7 mx-auto">
        <h2 className="text-xl font-bold text-center my-3 py-7">More about GetMeShikanji</h2>
        <div className="flex justify-center ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ga7-VvrVB-4?si=TkYOiBVpmJHoLNij" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>

      </>
  );
}
