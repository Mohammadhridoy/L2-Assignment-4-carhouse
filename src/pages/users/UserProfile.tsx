
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    
  } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import profile from "../../assets/profile.png"
import { useAppSelector } from "@/redux/hooks";
import { uesCurrentUser } from "@/redux/Features/auth/authSlice";
import { useChangePasswordMutation, useGetSingleUserQuery } from "@/redux/Api/userApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UserProfile = () => {

    const user = useAppSelector(uesCurrentUser)
    const [ changePassword,{isSuccess, isError} ]= useChangePasswordMutation()
    const singleUser = useGetSingleUserQuery(user?.email)
     const authUser = singleUser?.data?.data

     interface IFormInput {
      oldpassword: string;
      newPasssword: string
    }

     const { register, handleSubmit } = useForm<IFormInput>();
     const onSubmit: SubmitHandler<IFormInput> = data => {

      const change ={
        oldpassword:data?.oldpassword,
        newPassword: data?.newPasssword
      }

      changePassword(change)
       if(isSuccess){
         toast.success("password change..")
       }
       else if(isError){
        toast.error("Something is wron!")
       }

     }



    return (
        <div className="flex justify-center align-middle">
        <Card className="md:w-[700px]">
      
      <CardContent>
        <div className="py-4 flex justify-center ">
            <img className="w-1/4 " src={profile} alt="" />
        </div>
        <div className="flex justify-center align-middle gap-3 py-2" >
        <h1 className="font-bold text-2xl"> Name:</h1>
        <h1 className="text-2xl"> {authUser?.name}</h1>
        </div>
           {/* role */}
           <div className="flex justify-center align-middle gap-3 pb-2" >
        <h1 className="font-bold text-2xl"> Role:</h1>
        <h1 className="text-2xl"> {authUser?.role}</h1>
        </div>
        {/* email */}
        <div className="flex justify-center align-middle gap-3 pb-3 " >
        <h1 className="font-bold text-2xl"> Email:</h1>
        <h1 className="text-2xl">{authUser?.email}</h1>
        </div>

      </CardContent>


      {/* change password */}
      <CardFooter className="flex justify-center align-middle">
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive"> Change Password </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Changle Password</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        {/* from section */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="oldpassword" className="">
              Old Password
            </Label>
            <Input id="oldpassword" {...register("oldpassword")}   placeholder="Give old password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center ">
            <Label htmlFor="password" className="">
              New Password
            </Label>
            <Input id="password"  {...register("newPasssword")} placeholder="Give new password" className="col-span-3" />
          </div>
        </div>
    

        <DialogFooter>
          <DialogClose asChild>
          <Button type="submit" className="text-center"> Change </Button>
          </DialogClose>
        </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
      </CardFooter>
    </Card>
        </div>
    );
};

export default UserProfile;