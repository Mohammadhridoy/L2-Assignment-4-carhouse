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
import { useGetAllUsersQuery, useIsBlockedMutation } from "@/redux/Api/userApi";
import Loading from "@/Utils/Loading";
import { Tuser } from "@/Utils/types";
import { toast } from "sonner";




const Users = () => {

    const{ data, isLoading } = useGetAllUsersQuery(undefined)
    console.log(data);

    const[isBlocked, { isSuccess, isError} ] = useIsBlockedMutation()

    const handleBlock = (data:string) =>{

        const block = {
            userId:data
        }
console.log(block);
        isBlocked(block)

        if(isSuccess){
            toast.success('User is blocked!')
        }else if(isError){
            toast.error('Something is wrong')
        }


    }

    return (
      
            isLoading?<Loading></Loading>:
                  <div>
                      <Table>
                      <TableCaption></TableCaption>
                      <TableHeader >
                          <TableRow className="">
                          <TableHead className="w-[100px]">User_Name </TableHead>
                         
                          <TableHead className="text-center">E-mail</TableHead>
                          <TableHead className="text-center">Role</TableHead>
                          <TableHead className="text-center">deactivating </TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {data?.data?.map((user:Tuser) => (
                          <TableRow className="" key={user?._id}>
                              <TableCell className="font-medium">{user?.name}</TableCell>
                              <TableCell className="text-center">{user?.email}</TableCell>
                              <TableCell className="text-center">{user?.role}</TableCell>
                              <TableCell className="text-center"><Button onClick={ ()=> handleBlock(user?._id)}  type="submit" className={user?.isBlocked == true? "text-center opacity-75 cursor-none":"text-center"}>
                                {
                                    user?.isBlocked == true? "Blocked ": "Block "
                                }
                                </Button></TableCell>
                          
                              
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

export default Users;