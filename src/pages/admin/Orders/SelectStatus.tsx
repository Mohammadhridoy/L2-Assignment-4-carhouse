  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useUpdateOrderStatusMutation } from "@/redux/Api/orderApi";

  import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";



  type TorderStatus ={
    
    orderStatus: string,
    orderId:string,
  }

  enum Status{
    Pending="Pending",
    Processing="Processing",
    Shipped='Shipped',
    Delivered="Delivered"

  }

  interface IFormInput { 
    status:string
  }

const SelectStatus = ({orderStatus, orderId}:TorderStatus) => {

  

  const [updateOrderStatus] = useUpdateOrderStatusMutation()

  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit = async( data:IFormInput )=> {
    
  try{

    const updateOrder={
      orderStatus: data?.status,
      orderId:orderId
    } 

     updateOrderStatus(updateOrder)

     toast.success("Order Status change..!", {duration:1000})

  }catch(err){
    toast.error(`Something is wrong! ${err}`, {duration:1000})
  }

  }


 
    return (
       <div className="lg:flex justify-center align-middle ">
           <form onChange={handleSubmit(onSubmit)}>
            <Controller 
            name="status"
            control={control}
            defaultValue="Pending"
            render={({field})=>(
              <Select value={field.value} onValueChange={field.onChange} >
              <SelectTrigger   className="w-[100px]">
                  <SelectValue  placeholder="Status.." />
              </SelectTrigger>
              <SelectContent  >
                  {
                    orderStatus=="Pending"? (<h1 className="text-center">Not paid</h1> ):( 
                      <SelectGroup  >
                      <SelectLabel>Status</SelectLabel>
                     <SelectItem  value={Status.Pending}>Pending</SelectItem>
                     <SelectItem value={Status.Processing}>Processing</SelectItem>
                        <SelectItem value={Status.Shipped}>Shipped</SelectItem>
                     <SelectItem value={Status.Delivered}>Delivered</SelectItem>
                     </SelectGroup>
                     )}

         


           
       
            </SelectContent>
            </Select>
             )}
             />
            </form> 
       </div>
    );
};

export default SelectStatus;