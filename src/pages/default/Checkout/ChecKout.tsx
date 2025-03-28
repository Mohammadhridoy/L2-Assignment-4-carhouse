import { Link, useLocation } from "react-router-dom";
import CheckoutDetailsCard1 from "./CheckoutDetailsCard1";
import { Button } from "@/components/ui/button"
import UserDetailsCard from "./UserDetailsCard";
import { useState } from "react";

import { useGetSingleDataQuery } from "@/redux/Features/AllCars/GetAllCars";




const ChecKout = () => {



     const {state} = useLocation()
     
       

    const {data} = useGetSingleDataQuery(state)
    console.log(data?.data?.price);
   const unitPrice = data?.data?.price 



    // controll quantity with total price
   
    const [quantity, setQuantity ] = useState(1)
    const [totalprice, setTotalPrice] = useState(unitPrice)
      const handleAddition = () =>{
          const sumQuantity =  quantity + 1
          const totalPrice = unitPrice*sumQuantity
          setQuantity(sumQuantity)
          setTotalPrice(totalPrice)


  
      }
     
      const handleSubtraction  = () =>{
          if(quantity>1){
              const newQuantity = quantity-1
              const resultPrice = unitPrice*newQuantity
              setTotalPrice(resultPrice)
              setQuantity(newQuantity)
  
          }
      }



    return (
        <div className="py-24 px-14 bg-gray-50">
           <h1 className="flex justify-center align-middle
           underline font-bold text-2xl pb-8">Checkout</h1>
            {/* checkout details */}
           <div className="flex justify-evenly align-middle gap-16 ">
            {/* product details */}
            <div>
                <CheckoutDetailsCard1></CheckoutDetailsCard1>
            </div>
            {/* user details */}
            <div className="w-full">
            <UserDetailsCard ></UserDetailsCard>
            </div>

            {/* total price calculation, */}
            <div>
                < div className="w-64 h-52 mb-5 shadow-sm rounded-lg bg-white">
                <h1 className="p-4  text-xl font-semibold border-b border-gray-300">Summary</h1>

                <div className="px-3 flex  justify-between font-semibold ">
                <h1 className=" py-2  text-gray-400 font-semibold   ">Price</h1>
                <h1 className="  py-2   ">{data?.data?.price}</h1>
                </div>

                <div className="px-3 flex border-b-2 pb-2  justify-between font-semibold ">
                <h1 className=" py-2  text-gray-400 font-semibold   ">Quantity</h1>
                
             {/* quantity section */}
              <Button onClick={handleAddition} className="text-xl w-5 h-6 p-4"> + </Button>  
                <h1 className="">{quantity}</h1>
                <Button onClick={ handleSubtraction } className="text-xl w-5 h-6 p-4" > - </Button>  

              
                </div>

                <div className="px-3 flex  justify-between font-semibold ">
                <h1 className=" py-2  text-gray-400 font-semibold   ">Total Price</h1>
                <h1 className="  py-2   ">{ totalprice === undefined ? data?.data?.price : totalprice }</h1>
                </div>

                

                </div>

                {/* button section */}
                <Link className="w-full  " to="/checkout">
                    <Button className= "md:w-full bg-[#f75d34] " >Pay for Buy</Button> 
                </Link>
                <div className="mt-5">
                <Link className="w-full " to="/checkout">
                    <Button disabled className= "md:w-full bg-[#f75d34] " >Order Now</Button> 
                </Link>
                </div>
               

            </div>

           </div>

        </div>
    );
};

export default ChecKout;