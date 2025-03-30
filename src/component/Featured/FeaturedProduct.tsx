import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars";
import Cardinfo from "@/Shared/Card";
import { TCar } from "@/Utils/types";
import { Link } from "react-router-dom";



const FeaturedProduct = () => {

  

    const {data} = useGetAllCarsQuery(undefined)
    console.log("dd", data?.data);

    return (
        // key={data?._id}
        <div className="py-8 pb-20 bg-gray-100">
            <h1 className="font-bold text-2xl flex justify-center align-middle py-5">Featured Product</h1>
            <div>
            <Link className="w-full flex justify-end align-middle md:pr-10 pb-4 lg:pr-36  " to="/all-products">
            <Button className= " bg-[#f75d34]" >View All</Button> </Link>
            </div>
            <div className=" flex justify-center ">
            <Carousel className="w-full max-w-sm md:max-w-6xl shadow-lg">

            <CarouselContent className="-ml-1 ">
                {data?.data?.slice(0, 6)?.map((data:TCar) => (
                <CarouselItem key={data?._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    {/* <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">ddd</span>
                        </CardContent>
                    </Card>
                    </div> */}
                    <Cardinfo data={data}></Cardinfo>
                </CarouselItem>
                
                ))}
            </CarouselContent>
            <CarouselPrevious className="shadow-md" />
            <CarouselNext />
            </Carousel>
            </div>
            
        </div>
    );
};

export default FeaturedProduct;