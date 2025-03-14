import { cn } from "@/lib/utils"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SelectDemo from "@/component/Banner/Select"
import SelectDemo2 from "@/component/Banner/Selector2"
import { RadioGroupDemo } from "@/component/Banner/RadioGroup"
import { Link } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="relative">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Find your right car</CardTitle>

          <CardDescription className="py-6"> 
            <RadioGroupDemo></RadioGroupDemo>
            <div className="">
            <Button className=" absolute top-28 left-[-5px] mt-6 py-5 shadow-transparent
             rounded-tr-3xl rounded-br-3xl w-24 font-serif">New Car</Button>
            <Button className=" absolute top-28 right-[-3px] mt-6 py-5 shadow-transparent
             rounded-tl-3xl rounded-bl-3xl w-24 font-serif"> Used Car</Button>
            </div>
        
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-1 pt-12">
              <div className="grid gap-2">
              <SelectDemo2></SelectDemo2>
                
              </div>
              <div className="grid ">
                
                <SelectDemo ></SelectDemo>
              </div>
             <Link to="/all-products"> <Button type="submit" className="w-full mt-5 bg-[#f75d34] text-white font-bold text-xl py-6 hover:bg-bg-[#f75d34]">
              Search
              </Button> </Link> 
              
              <Link to="/all-products" className="flex justify-end align-middle text-gray-400 py-3 "> 
              <h6 className=" text-xs ">Advanced Search</h6> <FaLongArrowAltRight /> </Link>
              

              
             
              

            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
