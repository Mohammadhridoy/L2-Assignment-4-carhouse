
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
import { useGetSingleUserOrderQuery } from "@/redux/Api/orderApi";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";
import {  useAppSelector } from "@/redux/hooks";
import Loading from "@/Utils/Loading";
import { Torder } from "@/Utils/types";



const ViewOrder = () => {
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
               
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Method</TableHead>
                <TableHead className="text-center">Order_Status</TableHead>
                <TableHead className="text-center">Order_Date</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((order:Torder) => (
                <TableRow className="" key={order._id}>
                    <TableCell className="font-medium">{order?.transaction.id}</TableCell>
                    <TableCell className="text-center">{order?.quantity}</TableCell>
                    <TableCell className="text-center">{order?.transaction?.method}</TableCell>
                    <TableCell className="text-center">{order?.status}</TableCell>
                    <TableCell className="text-center">{new Date(order?.transaction?.date_time).toLocaleDateString()}</TableCell>

                    <TableCell className="text-center">{order?.totalPrice }</TableCell>
                
                    
                </TableRow>
                ))}
            </TableBody>
            <TableFooter className="bg-white">
                <TableRow>
                <TableCell colSpan={5}>Total</TableCell>
                <TableCell className=" flex justify-center" >
                   
                    {
                        data?.data?.reduce((total:number , order:Torder)=>
                        total+order?.totalPrice,0
                        ).toFixed(0)
                    }
                </TableCell>
                </TableRow>
            </TableFooter>
            </Table>
                    
        </div>
    );
};

export default ViewOrder;