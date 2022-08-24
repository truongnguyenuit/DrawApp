import { useRouter } from "next/router"
import { useEffect } from "react"
export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/auth/login")
  }
  use
  return (
    
    // <div className="">
    //   Hello world!
    //   <i className="fa-brands fa-facebook-f text-blue-500"></i>
    //   <button onClick={() => handleClick()}>
    //     clich
    //   </button>

    // </div>

  )
}
