import { useAppSelector } from "@/redux/hooks";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";

import { useGetSingleUserQuery } from "@/redux/Api/userApi";


const UserDetailsCard  = () => {

    const user  = useAppSelector(uesCurrentUser)
    const email= user?.email 
    const {data} = useGetSingleUserQuery(email)
    return (
        <div>
            <div >
            < div className=" shadow-sm rounded-lg bg-white">
                <h1 className="p-4  text-xl font-semibold border-b border-gray-300 "> User details</h1>

                <div className="flex justify-between align-middle pb-5 ">

                <div className="px-3   justify-between font-semibold ">
            <h1 className=" pt-2 pb-1  text-gray-400 font-semibold   ">User Name</h1>
            <h1 className="   ">{data?.data?.name}</h1>
            </div>
      
            <div className="px-3   justify-between font-semibold ">
            <h1 className=" pt-2 pb-1  text-gray-400 font-semibold   ">Email</h1>
            <h1 className="   ">{data?.data?.email}</h1>
            </div>
                </div>



                </div>
                
            </div>
        </div>
    );
};

export default UserDetailsCard;