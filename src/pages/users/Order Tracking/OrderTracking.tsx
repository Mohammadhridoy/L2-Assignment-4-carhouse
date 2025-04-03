import { useGetSingleUserOrderQuery } from "@/redux/Api/orderApi";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Torder } from "@/Utils/types";
  import Loading from "@/Utils/Loading";
import TrackingProduct from "./TrackingProduct";


const OrderTracking = () => {

     const user = useAppSelector(uesCurrentUser)
    
        const{ data, isLoading } = useGetSingleUserOrderQuery(user?.email)
        

    return (
       
             isLoading? <Loading></Loading>:
                    <div>
                        <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader >
                            <TableRow className="">
                            <TableHead className="w-[100px]">Order_ID </TableHead>
                           <TableHead className="text-center">Product_name</TableHead>
                            <TableHead className="text-center">Quantity</TableHead>
                            <TableHead className="text-center">Amount</TableHead>
                            <TableHead className="text-center">Deliveray_Date</TableHead>
                            <TableHead className="text-center">Order_Status</TableHead>
                            
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.data?.map((order:Torder) => (
                            <TableRow className="" key={order._id}>
                                <TableCell className="font-medium">{order?.transaction.id}</TableCell>
                                <TableCell className="text-center">
                                    <TrackingProduct productId={order?.carId}></TrackingProduct>
                                </TableCell>
                                <TableCell className="text-center">{order?.quantity}</TableCell>
                                <TableCell className="text-center">{order?.totalPrice }</TableCell>
        
                                <TableCell className="text-center">{new Date(order?.deliveryDate).toLocaleDateString()}</TableCell>
                                <TableCell className="text-center">{order?.orderStatus}</TableCell>
            
                               
                               
                            
                                
                            </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className="bg-white">
                            <TableRow>
                            </TableRow>
                        </TableFooter>
                        </Table>
                                
                    </div>
            
        
    );
};

export default OrderTracking;