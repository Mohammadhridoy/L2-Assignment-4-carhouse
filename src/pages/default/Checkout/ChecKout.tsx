import { Link } from "react-router-dom";
import CheckoutDetailsCard1 from "./CheckoutDetailsCard1";
import { Button } from "@/components/ui/button"
import UserDetailsCard from "./UserDetailsCard";
import {  useEffect, useState } from "react";
import { useSetOrderMutation } from "@/redux/Api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";
import { useSingledata } from "@/redux/Features/AllCars/getAllCarSlice";
import { dataStore, } from "@/Utils/types";
import { toast } from "sonner";




const ChecKout = () => {

  


    const singleData = useAppSelector(useSingledata)

    const carinfo = singleData?.dataStore as dataStore
    

    const unitPrice = singleData?.dataStore?.price  
    const  productDetail  = {
    carName: carinfo?.carName,
    model: carinfo?.model,
    brand: carinfo?.brand,
    year: carinfo?.year,
    }
   
    




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

    //   place order
    const user = useAppSelector(uesCurrentUser)
    const [setOrder, {isLoading, isSuccess, data, isError, error}] = useSetOrderMutation()
    const handleOrder = async () =>{

       const orderinfo =  {
             email: user?.email ,
             carId: carinfo?._id,
            quantity:quantity,
            totalPrice:totalprice
        }
        await setOrder(orderinfo)

    }
    
    const toastId = 1
    useEffect(()=>{
        if(isLoading) {
            toast.loading("Processing...", {id:toastId})
        }
        if(isSuccess){
            toast.success(data?.message, {id: toastId})
            if(data?.data){
                setTimeout(() =>{
                    window.location.href= data?.data
                }, 1000)
            }
                
        }
        if(isError){
            toast.error(JSON.stringify(error), {id:toastId})
        }


    },[isLoading, isSuccess, data, isError, error])



    return (
        <div className="py-24 px-14 bg-gray-50">
           <h1 className="flex justify-center align-middle
           underline font-bold text-2xl pb-8">Checkout</h1>
            {/* checkout details */}
           <div className="flex justify-evenly align-middle gap-16 ">
            {/* product details */}
            <div>
                <CheckoutDetailsCard1 carDetails={productDetail}></CheckoutDetailsCard1>
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
                <h1 className="  py-2   ">{carinfo?.price}</h1>
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
                <h1 className="  py-2   ">{ totalprice === undefined ? carinfo?.price : totalprice }</h1>
                </div>

                

                </div>

                {/* button section */}
                <Link className="w-full  " to="/checkout">
                    <Button 
                     onClick={handleOrder} className=" visible md:w-full bg-[#f75d34] " >Pay for Buy</Button> 
                </Link>
               
               

            </div>

           </div>

        </div>
    );
};

export default ChecKout;