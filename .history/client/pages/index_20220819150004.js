import { useRouter } from "next/router"
export default function Home() {
  useRouter.push("/auth/login")
  return (
    
    <div className="">
      Hello world!
      <i className="fa-brands fa-facebook-f text-blue-500"></i>
      
    </div>
    
  )
}
