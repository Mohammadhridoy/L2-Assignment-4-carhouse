
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
import { useAppSelector } from "@/redux/hooks"
import { uesCurrentUser } from "@/redux/Features/auth/authSlice"





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
        }

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


  const user = useAppSelector(uesCurrentUser)

    return (
      <Sidebar className="" collapsible="icon" {...props}>

        <SidebarContent className="mt-20" >

          {
            user?.role =="admin"? <NavMain items={data.navMain.admin} /> 
            :<NavMain items={data.navMain.user} />

          }
        </SidebarContent>


        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        
        <SidebarRail />
      </Sidebar>
    )
  }