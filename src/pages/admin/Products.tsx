import { Badge } from "@/components/ui/badge";
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
import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars";
  import Loading from "@/Utils/Loading";
import { TCar } from "@/Utils/types";





const Products = () => {

    const {data, isLoading} = useGetAllCarsQuery(undefined)


    return (
       
        isLoading?<Loading></Loading>:
        <div>
            <Table>
            <TableCaption></TableCaption>
            <TableHeader >
                <TableRow className="">
                <TableHead className="w-[100px]">Car_Name </TableHead>
               
                <TableHead className="text-center">Brand</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-center">Year</TableHead>
                <TableHead className="text-center">Stock</TableHead>
                <TableHead className="text-center">Amount</TableHead>
                <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((car:TCar) => (
                <TableRow className="" key={car?._id}>
                    <TableCell className="font-medium ">{car?.carName}</TableCell>
                    <TableCell className="text-center">{car?.brand}</TableCell>
                    <TableCell className="text-center">{car?.quantity}</TableCell>
                    <TableCell className="text-center">{car?.year}</TableCell>
                    <TableCell className="text-center">
                    <Badge variant="default" className="p-2">{car?.inStock== true ? " InStock" :  "Out Of Stock"}</Badge>
                    </TableCell>
                    <TableCell className="text-center">{car?.price}</TableCell>
                    <TableCell className="text-center ">
                   < Button   type="submit"  variant={"destructive"} className="text-center mr-3 ">Update</Button>
                   < Button   type="submit"  variant={"destructive"} className="text-center">Delete</Button>
                             

                    </TableCell>
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

export default Products;