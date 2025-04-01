import { Link } from "react-router-dom"
import { LoginForm } from "./Login-forim"
import { FaArrowLeftLong } from "react-icons/fa6";

function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
       <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md  text-primary-foreground">
            
            <FaArrowLeftLong className="text-black" />
            </div>
            Go Back
          </Link>
      <div className="w-full max-w-sm md:max-w-3xl">
        
        <LoginForm />
      </div>
    </div>
  )
}


export default Login