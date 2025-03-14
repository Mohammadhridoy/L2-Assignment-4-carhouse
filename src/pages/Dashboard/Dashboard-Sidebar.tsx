
import {
  UserRoundPen,
  CalendarArrowDown,
  UserRound,
  Car,
  View
} from "lucide-react"

import { NavMain } from "../Dashboard/Dashboard-nav"
import { NavUser } from "../Dashboard/Dashboard-NavUser"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
// import { useState } from "react"




const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: { 
     user: [ 
        {
          title: "My profile",
          url: "/dashboard",
          icon: UserRoundPen,
          isActive: false,
        },
        {
          title: "View Orders ",
          url: "/dashboard/user/vieworder",
          icon:  View,
          isActive: false,
        },

      ],
      admin: [ 
        {
          title: "My profile",
          url: "/dashboard",
          icon: UserRoundPen,
          isActive: false,
        },
        {
          title: "Users",
          url: "/dashboard/admin/users",
          icon: UserRound,
          isActive: true,
        },
        {
          title: "Products",
          url: "/dashboard/admin/products",
          icon:  Car,
          isActive: true,
        },
        {
          title: "Orders",
          url: "/dashboard/admin/orders",
          icon: CalendarArrowDown,
          isActive: true,
        },

      ],
     }


  }
  





export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

//   const user= "user"
// const [dataUser, setUser] = useState(user)

// if(user){
//   setUser(data.navMain.user)

// }

    return (
      <Sidebar className="" collapsible="icon" {...props}>

        <SidebarContent className="mt-20" >
          <NavMain items={data.navMain.admin } />
         
        </SidebarContent>


        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        
        <SidebarRail />
      </Sidebar>
    )
  }