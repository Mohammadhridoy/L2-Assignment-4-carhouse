import { AppSidebar } from "../Allproducts/App-Sidebar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


function Allproducts() {

  

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1 md:hidden" />
          <Separator orientation="vertical" className="mr-2 h-4 md:hidden" />
          <Input type="text" className=" lg: w-2/5" placeholder="search brand, car name, or category" /> 
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              dddd
          </div>
          {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Allproducts