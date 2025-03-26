import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
import { TCar } from "@/Utils/types";
import { Link } from "react-router-dom";



type Tprops = {
  data:TCar
  
}


const Cardinfo:React.FC<Tprops> = ({data}) => {



 

    return (
           <Card>
            <p></p>
                <CardHeader>
                   
                    <img className=" rounded-md"  src={data?.image} alt="" />
                    
                    <div className="pt-2 flex justify-between align-middle">
                    <CardTitle className="text-2xl pb-2">{data?.carName}</CardTitle>
                    <CardTitle className="text-xl ">${data?.price}</CardTitle>
                    </div>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                   <div className="font-semibold flex justify-between align-middle">
                   <h1 >Brand: {data?.brand} </h1> <h1>Model: {data?.model} </h1> 
                   </div>
                 <div className="font-semibold flex justify-between align-middle">
                 <h1> Category: {data?.category} </h1>
                 {
                  data.inStock ?  <h1 className= "bg-green-400 rounded-sm w-20 text-center text-white">inStock</h1>
                  :  <h1 className= "bg-red-500 rounded-sm w-25 p-1 text-center text-white">Out of stock </h1>
                 }
                
                 </div>
                </CardContent>
                <CardFooter>
              <Link className="w-full " to="/productsdetails" state={data._id}>
               <Button className= "md:w-full bg-[#f75d34]" >View Details</Button> </Link>
                </CardFooter>
            </Card>

            
        
    );
};

export default Cardinfo;