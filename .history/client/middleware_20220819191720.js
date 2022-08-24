import { NextRequest } from "next/server";

export default function middleware(req){

  const [isAuthenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  const loadUser = async () => {

    if (localStorage['LocalStorageTokenName']) {

      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        const response = await axios.get(`http://localhost:5000/api/auth`)
        if (response.data.success) {
          setAuthenticated(true)
        }
      } catch (error) {
        console.log(error)
      }
      console.log(isAuthenticated)
    }
    else {
      console.log("Don't see local storage:")
    }
  }
  useEffect(() => {
    loadUser()
    // console.log(router.asPath)
  }, [isAuthenticated,router.asPath])

  if (router.asPath !== "/auth/login" || router.asPath !== "auth/register") {
    if(!isAuthenticated) {
     return NextResponse.redirect("/auth/login")
    }
  } 
}