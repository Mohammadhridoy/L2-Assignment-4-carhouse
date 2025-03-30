import * as React from "react"

import { NavMain } from "../Allproducts/Nav-main"


import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"



// This is sample data.
const data = {
  navMain: [

    {
      title:"price",
      title1:"Budget",
      items:[
        {
            title: "7000000 - 2000000"
        },
        {
          title:"2100000 - 3500000"
        },
        {
          title:"3600000 - 6000000"
        },
        {
          title:"6100000 - 100000000"
        }

      ]

    },

    // brand
    {
      title:"brand",
      title1:"Brand",
      items:[
        {
          title: "Tata"

        },
        {
          title:"Kia"
        },
        {
          title:"Toyota"
        },
        {
          title:"Maruti"
        },
        {
          title:"Tesla"
        }

      ]

    },
    
    // Model
    {
      title:"model",
      title1:"Model",
      items:[
        {
          title: "Civic"

        },
        {
          title:"Camry"
        },
        {
          title:"Seltos"
        },
        {
          title:"Swift"
        },
        {
          title:"Corvette"
        }

      ]

    },
    // category
    {
      title:"category",
      title1:"Category",
      items:[
        {
          title: "Luxury"

        },
        {
          title:"SUV"
        },
        {
          title:"Sedan"
        },
        {
          title:"Coupe"
        },
        {
          title:"Electric"
        }

      ]

    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

 

  return (
    <Sidebar className="z-0 sticky  md:w-48 lg:w-full" {...props}>
      {/* header siderbar */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* sidebar content */}
      <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail className="md:hidden lg:visible" />
    </Sidebar>
  )
}

