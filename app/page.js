import Image from "next/image";
import Link from "next/link";

export default function Home() {



  return (
    <>
      <div className="flex flex-col mx-3 justify-center gap-5 items-center h-[40vh]">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 px-4 text-center">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">Get Me Shikanji</h1>
          <span className="flex-shrink-0">
            <img
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
              src="./pep.gif"
              alt="Shikanji"
            />
          </span>
        </div>
        <p className=" text-center">
          crowd funding platform for creative projects . Get funded by like minded people  , Fans and  Investors.
          Start your project now!
        </p>
        <div className="text-center" >
          <Link href={"/login"}>
            <button className='relative inline-flex h-8 sm:h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 sm:px-8 py-1 sm:text-sm text-xs font-medium text-gray-50 backdrop-blur-3xl'>
                Get Started
              </span>
            </button>
          </Link>
          <Link href={"/about"} >
            <button className='relative inline-flex h-8 sm:h-12 overflow-hidden mx-2 rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-4 sm:px-8 py-1 sm:text-sm text-xs font-medium text-gray-50 backdrop-blur-3xl'>
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-15">      </div>
      <div className="container mb-7 mx-auto">
        <h2 className="text-xl font-bold text-center my-3 py-7">Your Fans can buy you a Shikanji 🍋</h2>
        <div className="flex gap-5 justify-around flex-col sm:flex-row  ">
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100} className=" bg-slate-400/60 rounded-full p-1" src="./deve.gif" alt="developer" />
            <p className=" font-semibold text-base">Fund yourself</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100} className=" bg-slate-400/60 rounded-full p-1" src="./coin.gif" alt="developer" />
            <p className=" font-semibold text-base">Fund yourself</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img width={100} className=" bg-slate-400/60 rounded-full p-1 " src="./group.gif" alt="developer" />
            <p className=" font-semibold text-base">Fans want to help</p>
            <p className="text-sm">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-15">      </div>
      <div className="container mb-7 mx-auto px-4">
        <h2 className="text-xl font-bold text-center my-3 py-7">More about GetMeShikanji</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="w-full max-w-md aspect-video">
            <iframe
              className="rounded-2xl border-2 border-sky-800 w-full h-full"
              src="https://www.youtube.com/embed/Ga7-VvrVB-4?si=TkYOiBVpmJHoLNij"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full max-w-md aspect-video">
            <iframe
              className="rounded-2xl border-2 border-sky-800 w-full h-full"
              src="https://www.youtube.com/embed/Ga7-VvrVB-4?si=TkYOiBVpmJHoLNij"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full max-w-md aspect-video md:col-span-2 lg:col-span-1">
            <iframe
              className="rounded-2xl border-2 border-sky-800 w-full h-full"
              src="https://www.youtube.com/embed/Ga7-VvrVB-4?si=TkYOiBVpmJHoLNij"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

    </>
  );
}

