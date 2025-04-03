
import { Button } from "@/components/ui/button";
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




import { useGetAllOrdersQuery } from "@/redux/Api/orderApi";
import Loading from "@/Utils/Loading";
import { Torder } from "@/Utils/types";
import PickADate from "./PickADate";
import SelectStatus from "./SelectStatus";




const Orders = () => {



    const {data, isLoading} = useGetAllOrdersQuery(undefined)
   

    return (
        isLoading? <Loading></Loading>:
        <div>
            <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader >
                <TableRow className="">
                <TableHead className="w-[100px]">Order_ID </TableHead>
               
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Order_Status</TableHead>
                <TableHead className="text-center">Payment_Status</TableHead>
                <TableHead className="text-center">Order_Date</TableHead>
                <TableHead className="text-center">Order_status</TableHead>
                <TableHead className="text-center">Delivery_Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order:Torder) => (
                <TableRow className="" key={order._id}>
                    <TableCell className="font-medium">{order?.transaction.id}</TableCell>
                    <TableCell className="text-center">{order?.quantity}</TableCell>
                    <TableCell className="text-center">{order?.orderStatus}</TableCell>
                    <TableCell className="text-center">{order?.status}</TableCell>
                    <TableCell className="text-center">{new Date(order?.transaction?.date_time).toLocaleDateString()}</TableCell>
                    <TableCell className="text-center ">
                        {/* dropdown menu */}
                        <SelectStatus  orderStatus={order?.status} orderId={order?._id} ></SelectStatus>
                      
                    </TableCell>
                    <TableCell className="text-center"> 
                        {/* delivery date */}
                        <PickADate orderId={order?._id} orderStatus={order?.status}  ></PickADate>

                    </TableCell>
                    <TableCell className="text-center">{order?.totalPrice }</TableCell>
                    <TableCell>< Button  type="submit"  variant={"destructive"} className="text-center mr-3 ">Delete</Button></TableCell>
                
                    
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

export default Orders;