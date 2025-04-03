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
  import { Button } from "@/components/ui/button"


    import { Calendar } from "@/components/ui/calendar"
    import {
      Popover,
      PopoverContent,
      PopoverTrigger,
    } from "@/components/ui/popover"
    import { format } from "date-fns"
  import { CalendarIcon } from "lucide-react"
   
  import { cn } from "@/lib/utils"
  import {
      Form,
      FormControl,
      FormField,
      FormItem,
      FormMessage,
    } from "@/components/ui/form"
    import { useForm } from "react-hook-form"
    import { z } from "zod"
    import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateDateMutation } from "@/redux/Api/orderApi"
import { toast } from "sonner"

    type Torder= {
        orderId:string,
        orderStatus: string
    }

const PickADate = ({orderId, orderStatus}:Torder ) => {
        const [updateDate] = useUpdateDateMutation()
        const FormSchema = z.object({
            dob: z.date({
              required_error: "A date of birth is required.",
            }),
          })
          
          const form = useForm<z.infer<typeof FormSchema>>({
                  resolver: zodResolver(FormSchema),
                })
          
        
           
           const  onSubmit = async (data: z.infer<typeof FormSchema>) => {
              
              const date =data.dob
              console.log(date);

              try{

                const updateInfo = {
                  orderId: orderId,
                  date: date
                  }

                updateDate(updateInfo )
                toast.success('Deliver Date update successfully!')

              }catch(err){
                toast.error(`Something is wrong! ${err}`, {duration:1000})
              }
                  
                
             
            }


    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Set Date</Button>
        </DialogTrigger>
        {
          orderStatus !=="Pending" ? <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Give estimated delivery date</DialogTitle>
            <DialogDescription>
           
          </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center space-x-2">
            {/* date pic  */}
            <Form {...form}  >
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                control={form.control}
                                name="dob"
                                
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                    
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[150px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                               
                                initialFocus
                                
                            />
                            </PopoverContent>
                        </Popover>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <DialogClose asChild>
                     <Button type="submit">Submit</Button>
                     </DialogClose>
                </form>
                </Form>


          </div>
          <DialogFooter className="sm:justify-start">
          
          </DialogFooter>
        </DialogContent>:" "
        }
      </Dialog>
    );
};

export default PickADate;