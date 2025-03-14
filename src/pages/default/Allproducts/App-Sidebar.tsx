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
      title:"Budget",
      items:[
        {
            title: "5 - 10 Lakh"

        },
        {
          title:"10 - 15 Lakh"
        },
        {
          title:"15 - 20 Lakh"
        },
        {
          title:"20 Lakh Above"
        }

      ]

    },

    // brand
    {
      title:"Brand",
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
        }

      ]

    },
    
    // Model
    {
      title:"Model",
      items:[
        {
          title: "Honda Civic"

        },
        {
          title:"Toyota Camry"
        },
        {
          title:"Toyota Corolla"
        },
        {
          title:"Toyota Tundra"
        }

      ]

    },
    // category
    {
      title:"Category",
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
      <SidebarContent className="md:pl-10">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail className="md:hidden lg:visible" />
    </Sidebar>
  )
}

