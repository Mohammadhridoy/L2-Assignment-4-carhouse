
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "./Register-form"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import registerImage from"../../../assets/Mobile login-pana.png"

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md  text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
            <FaArrowLeftLong className="text-black" />
            </div>
            Go Back
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={registerImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
