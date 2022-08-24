import { useRouter } from "next/router"
import { useEffect } from "react"
export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/auth/login")
  }
  useEffect(() => {
    handleClick()
  }, [])
  return (
    
    <div className=""></div>

  )
}
