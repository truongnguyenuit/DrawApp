import Link from "next/link";
import { Row, Col, Input } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useRouter } from "next/router";
const draw = () => {

  const router = useRouter()
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
  if (authLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }
  if (!isAuthenticated) {
    router.replace('/auth/login')
    return null;
  }

  return (
    <div className='flex justify-center bg-gray-200 h-[1000px]'>
      <div className="bg-white w-[770px] h-[814px] mt-[40px] flex flex-col items-center gap-0.5  p-10 rounded-lg">
        <div className='flex justify-start items-center w-full mb-[42px]'>
          <Link href={'/draw/list'} className="text-black font-bold " passHref>
            <span className="">
              
              Back to List
            </span>
          </Link>
          <span className="text-[40px] ml-[90px] ">Your Draw</span>
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

export default draw