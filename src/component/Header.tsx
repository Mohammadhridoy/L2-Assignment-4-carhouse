import { Link } from "react-router-dom";
import logo from"../assets/carDekho-newLogo.png"
import icon1 from "../assets/check.png"
import icon2 from "../assets/user-interface.png"

 
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  
} from "@/components/ui/navigation-menu"
import { useAppSelector } from "@/redux/hooks";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";

const Header = () => {

  const user = useAppSelector(uesCurrentUser)


    return (
    <div className=" bg-[#f6f6f9]  mx-auto z-10  lg:py-4 md:sticky top-0   px-6 md:px-8 lg:px-12 lg:w-full lg:flex">
        <div className=" w-1/3 "> 
            <img className="w-32" src={logo} alt="" />
        </div>

        <div className="w-1/3 lg:flex justify-center"> 
        <NavigationMenu>
      <NavigationMenuList >
        <NavigationMenuItem >
         <Link to="/" className="px-4 py-2 bg-white text-center rounded-lg mr-2 hover:bg-[#f75d34] ease-in-out duration-300 hover:text-white">  Home </Link>
        </NavigationMenuItem>

        <NavigationMenuItem >
        <Link to="/all-products" className="px-4 py-2 bg-white text-center rounded-lg mr-2 hover:bg-[#f75d34] ease-in-out duration-300 hover:text-white" > All products </Link>
        </NavigationMenuItem>
       
        <NavigationMenuItem >
        <Link to="/about" className="px-4 py-2 bg-white text-center rounded-lg mr-2 hover:bg-[#f75d34] ease-in-out duration-300 hover:text-white" > About </Link>
        </NavigationMenuItem>


        {
          user ? <NavigationMenuItem >
          <Link to="/dashboard" className="px-4 py-2 bg-white text-center rounded-lg mr-2 hover:bg-[#f75d34] ease-in-out duration-300 hover:text-white" > Dashboard </Link>
          </NavigationMenuItem> : " "
        }
        
      
        
      </NavigationMenuList>
    </NavigationMenu>

        </div>
        {/* header right */}
        <div className=" w-1/3 lg:flex justify-end gap-8"> 
         <Link to="/checkout">  <img className="md:w-6 h-6" src={icon1} alt="" /></Link>
            <div className="md:flex lg:flex align-middle ">
            <img className="md:w-5 h-5  md:mr-3 mt-[2px]" src={icon2} alt="" />
           <Link to="/login">  <h1 className=" font-semibold">login</h1></Link>
           <Link to="/register">   <h1 className="font-semibold">/Register</h1></Link>
            </div>
            
        </div>



  

        


    </div>
    );
};

export default Header;