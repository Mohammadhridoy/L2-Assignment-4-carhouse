import { AppSidebar } from "../Allproducts/App-Sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"



import {  useGetAlldata } from "@/redux/Features/AllCars/getAllCarSlice"
import { useAppSelector } from "@/redux/hooks"
import Cardinfo from "@/Shared/Card"

import { TCar } from "@/Utils/types"




function Allproducts() {
  
   
const {data}= useAppSelector(useGetAlldata)
const carAllData= data?.data 

  return (
 
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset  >
        
           <div className="flex flex-1 flex-col gap-4 p-4">
          <div  className="grid auto-rows-min gap-4 md:grid-cols-3">
            {
                carAllData && carAllData?.map((carInfo:TCar)=>
           
                     <Cardinfo key={carInfo?._id}  data={carInfo} ></Cardinfo> 
              
                )
            }
          </div>
        
     
        </div>
      
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Allproducts