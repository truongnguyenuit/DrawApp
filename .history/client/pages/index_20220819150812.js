import { useRouter } from "next/router"
export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    
  }
  return (
    router.push("/auth/login")
    // <div className="">
    //   Hello world!
    //   <i className="fa-brands fa-facebook-f text-blue-500"></i>
    //   <button onClick={() => handleClick()}>
    //     clich
    //   </button>

    // </div>

  )
}
