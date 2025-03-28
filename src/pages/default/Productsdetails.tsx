  import { Button } from "@/components/ui/button"
import { useGetSingleDataQuery } from "@/redux/Features/AllCars/GetAllCars";
import { Link, useLocation } from "react-router-dom";

const Productsdetails = () => {

    const {state} = useLocation()
   

    const {data} = useGetSingleDataQuery(state)

    
    const dataStore = data?.data



    return (
        <div className="flex  justify-between align-middle p-14">
            {/* image section */}
            <div className="w-full h-full">
                <img className="w-11/12  pl-2 lg:h-[650px]" src={dataStore?.image} alt="" />
            </div>
            {/* vehicle information secton */}
            <div className="w-2/5">
                {/* name and compare button */}
                <div className="flex  justify-between align-middle">
                    <h1 className="font-semibold text-xl">{dataStore?.carName}</h1>
                    <Button className= " bg-[#f75d34]" > COMPARE VEHICLE</Button>

                </div>
                {/* vehicle All info */}
                <div className="pt-5 " >
                    <h1 className="font-bold text-2xl">Vehicle Overview </h1>
                    {/* vehicle inner-1 info */}
                    <div  className="flex justify-normal pt-3 border-b-2  font-bold align-middle" >
                        <h1 className=" bg-gray-400 rounded-l-sm py-2 pl-1  w-2/4">Brand </h1> 
                        <h1 className="bg-gray-300 py-2 pl-3 rounded-r-sm  w-2/4">{dataStore?.brand}</h1>
                    </div>
                    {/* vehicle inner-1 info */}
                    <div className="flex justify-normal  border-b-2  font-bold align-middle" >
                        <h1 className=" bg-gray-400 rounded-l-sm py-2 pl-1  w-2/4">Model</h1> 
                        <h1 className="bg-gray-300  py-2 pl-3 rounded-r-sm  w-2/4">{dataStore?.model}</h1>
                    </div>
                    {/* vehicle inner-2 info */}
                    <div className="flex justify-normal border-b-2  font-bold align-middle" >
                        <h1 className=" bg-gray-400 py-2 pl-1 rounded-l-sm  w-2/4">Category </h1> 
                        <h1 className="bg-gray-300 py-2 pl-3  rounded-r-sm w-2/4">{dataStore?.category}</h1>
                    </div>
                    {/* vehicle inner-2 info */}
                    <div className="flex justify-normal border-b-2 font-bold align-middle" >
                        <h1 className=" bg-gray-400 py-2 pl-1 rounded-l-sm  w-2/4">Year </h1> 
                        <h1 className="bg-gray-300 py-2 pl-3  rounded-r-sm w-2/4">{dataStore?.year}</h1>
                    </div>
                    <div className="flex justify-normal border-b-2 font-bold align-middle" >
                        <h1 className=" bg-gray-400 py-2 pl-1 rounded-l-sm  w-2/4">Price </h1> 
                        <h1 className="bg-gray-300 py-2 pl-3  rounded-r-sm w-2/4">${dataStore?.price}</h1>
                    </div>
                    <div className="flex justify-normal  border-b-2 font-bold align-middle" >
                        <h1 className=" bg-gray-400 py-2 pl-1 rounded-l-sm  w-2/4">Quantity</h1> 
                        <h1 className="bg-gray-300 py-2 pl-3  rounded-r-sm w-2/4">{dataStore?.quantity}</h1>
                    </div>
                    <div className="flex justify-normal pb-3 font-bold align-middle" >
                        <h1 className=" bg-gray-400 py-2 pl-1 rounded-l-sm  w-2/4">Stock </h1> 
                        <h1 className="bg-gray-300 py-2 pl-3  rounded-r-sm w-2/4">{dataStore?.inStock == true? "In Stock": " Out of Stock"}</h1>
                    </div>

                    {/* description */}
                    <div>
                        <h1 className="font-bold text-xl text-black underline" >Description</h1>
                        <p className="w-11/12">{dataStore?.description}</p>
                    </div>

                    {/* Quantity */}
                    <div className="py-5 mt-10">
                        {
                            dataStore?.inStock == true?<Link className="w-full " to="/checkout" state={dataStore?._id} >
                    <Button  className= "md:w-full bg-[#f75d34]" >Buy Now</Button> </Link>:
                     <Button disabled className= "md:w-full bg-[#f75d34]" >Out Of Stock</Button>
                        }
                    
                    </div>

                </div>

            </div>
        
            
        </div>
    );
};

export default Productsdetails;