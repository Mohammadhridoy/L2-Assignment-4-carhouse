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



type Tprops = {
  data:TCar
  
}


const Cardinfo:React.FC<Tprops> = ({data}) => {



  console.log("single",data);

    return (
           <Card>
            <p></p>
                <CardHeader>
                   
                    <img className=""  src={data?.image} alt="" />
                    
                    <div className="pt-2">
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
                 <h1 className="bg-green-400 rounded-sm w-20 text-center">inStock</h1>
                 </div>
                </CardContent>
                <CardFooter>
                <Button className="w-full bg-[#f75d34]">View Details</Button>
                </CardFooter>
            </Card>

            
        
    );
};

export default Cardinfo;