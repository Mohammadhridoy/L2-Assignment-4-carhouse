import { Badge } from "@/components/ui/badge"
import { DialogContent, DialogTrigger,  Dialog, DialogHeader, DialogTitle, DialogDescription, } from "@/components/ui/dialog";
import { BadgeCheck, BadgeInfo } from "lucide-react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { useVerifyOrderQuery } from "@/redux/Api/orderApi";
import Loading from "@/Utils/Loading";



const OrderVerify = () => {
    const [searchParams] = useSearchParams()
    console.log();

    const {isLoading, data} = useVerifyOrderQuery(searchParams.get("order_id"),{refetchOnMountOrArgChange:true})
    console.log(data?.data?.[0]);
    const orderedInfo = data?.data?.[0]






    // modal and navigate view order pages 
    const navigate = useNavigate();
    const handleOrder = () =>{
        
            setTimeout(()=>{
                navigate('/dashboard/user/vieworder')
            },1000)
       
    }
    const handleBack = () =>{
        navigate("/checkout")
    }


 
    return (
        isLoading? <Loading></Loading>:
        <div className="px-14 md:py-14">
            <h1 className="font-bold text-2xl py-8">Order Verification</h1>

            <div className="grid grid-cols-2 gap-10">
            <div className="shadow-md rounded-lg bg-white ">
            <h1 className="font-bold text-xl py-4 pl-6">Order Details</h1>

            <div className="grid grid-cols-2 space-y-2 ">
                <h1 className="font-semibold pl-6">Order ID:</h1>
                <h1 className=" text-[18px] pl-6">{orderedInfo?.order_id}</h1>

                <h1 className="font-semibold pl-6">Amount</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.currency} {orderedInfo?.amount}</h1>

                <h1 className="font-semibold pl-6">Status</h1>
                <Badge className="w-1/4 text-[16px]  ml-5" variant={orderedInfo.bank_status==="Success"? "secondary":"destructive"}>{orderedInfo?.bank_status}</Badge>

                <h1 className="font-semibold pl-6">Date</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.date_time}</h1>
            </div>

            </div>


            <div  className="  shadow-md rounded-lg bg-white ">
            <h1 className="font-bold text-xl py-4 pl-6">Payment Information</h1>
            {/* information section-2*/}
            <div className="grid grid-cols-2 space-y-1 pb-4 ">
                <h1 className="font-semibold pl-6">Method:</h1>
                <h1 className=" text-[18px] pl-6">{orderedInfo?.method}</h1>

                <h1 className="font-semibold pl-6">Transaction ID:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.transasction}</h1>

                <h1 className="font-semibold pl-6">Invoice No:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.invoice_no}</h1>

                <h1 className="font-semibold pl-6">SP Code:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.sp_code}</h1>

                <h1 className="font-semibold pl-6">SP Message:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.sp_message}</h1>

            </div>

            </div>

            <div  className="  shadow-md rounded-lg bg-white ">
            <h1 className="font-bold text-xl py-4 pl-6">Customer Information</h1>

            {/* information section */}
            <div className="grid grid-cols-2 space-y-1 pb-4 ">
                <h1 className="font-semibold pl-6">Name:</h1>
                <h1 className=" text-[18px] pl-6">{orderedInfo?.name}</h1>

                <h1 className="font-semibold pl-6">Email:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.email}</h1>

                <h1 className="font-semibold pl-6">Phone:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.phone_no}</h1>

                <h1 className="font-semibold pl-6">Address:</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.address}</h1>
                <h1 className="font-semibold pl-6">City</h1>
                <h1 className="text-[18px] pl-6">{orderedInfo?.city}</h1>
            </div>

            </div>

            <div  className="  shadow-md rounded-lg bg-white ">
                     <h1 className="font-bold text-xl py-4 pl-6">Verification Status</h1>
                <div className="pl-6">

                    {
                        orderedInfo?.bank_status? <div className="flex align-middle gap-3">
                        <BadgeCheck color="#18aa3d" />
                        <h1 className="font-semibold">Verified</h1>
                        </div> : <div className="flex align-middle gap-3">
                    <BadgeInfo color="#c6c918" />
                    <h1 className="font-semibold">Not Verified</h1>
                    </div>
                    }
                    
                   
                </div>
                <div className="pl-6 pt-3">
                <Dialog>
                     
                    <DialogTrigger  > 
                        {
                            orderedInfo?.bank_status==="Success" ?<h3 
                            className= " bg-[#f75d34] text-[16px] rounded-lg text-white p-2 hover:bg-black shadow-sm" 
                            onClick={handleOrder}  >Order Now</h3>  : <h3 
                            className= " bg-[#f75d34] text-[16px] rounded-lg text-white p-2 hover:bg-black shadow-sm" 
                            onClick={handleBack}  >Go back</h3>
                        }
                    
                    
                   
                    </DialogTrigger>
                       
                    
                    
                    <DialogContent>
                    <DialogHeader>
                    <DialogTitle  className=" text-2xl flex justify-center gap-3 align-middle">
                      <GiConfirmed  className=" text-green-600 mt-1" />
                        <span className="font-bold " >Order confirm </span>
                    </DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                    
                    </DialogHeader>        
                     </DialogContent>
                    </Dialog>  
                </div>
            </div>

            </div>
        </div>
    );
};

export default OrderVerify;