import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const drawDetail = () => {
  const router = useRouter()

  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-start items-center w-full mb-[42px]'>
          <Link href={'/draw/list'} className="text-black font-bold " passHref>
            <span className=" font-bold cursor-pointer">
              Back to List
            </span>
          </Link>
          <span className="text-[40px] ml-[175px] ">Your Draw</span>
        </div>


        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-white font-bold w-[200px] h-[45px] text-black rounded-[8px] border-2 border-black"
          >
            Edit
          </button>
        </div>


      </div>

    </div>
  )
}

export default drawDetail