import { TproductDetail } from "@/Utils/types";

type carDetails = {
    carDetails:TproductDetail
}


const CheckoutDetailsCard1: React.FC<carDetails> = ({carDetails}) => {

    const { carName, model, brand,  year} = carDetails

    return (
        <div >
           < div className="w-64 h-60 shadow-sm rounded-lg bg-white">
            <h1 className="p-4  text-xl font-semibold border-b border-gray-300"> product details</h1>

           <div className="px-3 flex  justify-between font-semibold ">
           <h1 className=" py-2  text-gray-400 font-semibold   ">Car Name</h1>
           <h1 className="  py-2   ">{carName}</h1>
           </div>

           <div className="px-3 flex  justify-between font-semibold ">
           <h1 className=" py-2  text-gray-400 font-semibold   ">Model</h1>
           <h1 className="  py-2   ">{model}</h1>
           </div>

           <div className="px-3 flex  justify-between font-semibold ">
           <h1 className=" py-2  text-gray-400 font-semibold   ">Brand</h1>
           <h1 className="  py-2   ">{brand}</h1>
           </div>

           <div className="px-3 flex  justify-between font-semibold ">
           <h1 className=" py-2  text-gray-400 font-semibold   ">Year</h1>
           <h1 className="  py-2   ">{year}</h1>
           </div>
            </div>
            
        </div>
    );
};

export default CheckoutDetailsCard1;