"use client"

import { type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"



export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}) 
{
  
  return (
    
    <SidebarGroup>
      <SidebarGroupLabel className="text-xl text-black py-4 ">{`Admin Dashboard`}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem className="mt-5" >
              <CollapsibleTrigger asChild>

               <NavLink to={item.url}><SidebarMenuButton 
               className="md:py-4 md:text-[14px] lg:text-[17px] font-semibold font-sans shadow-sm hover:text-red-500 hover:translate-y-1 transition-all "
               tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span >{item.title}</span>
  
                </SidebarMenuButton> </NavLink> 
 
              </CollapsibleTrigger>


            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
