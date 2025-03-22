

import {
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { useGetAllCarsQuery } from "@/redux/Features/AllCars/GetAllCars"
import { useState } from "react"








export function NavMain({
  items,
}: {
  items: {
    title: string,
    title1:string 
    items?: {
      title: string
    }[]
  }[]
}) {

  const [filters, setFilters ] = useState<Record<string, string[]>>({})

  const queryParams = Object.entries(filters).map(([key, values])=>
      values.map((value)=>({name:key, value}))
  ).flat()


  const {data} = useGetAllCarsQuery({arg: queryParams} )

console.log("nav",data);


console.log( 'ddd', queryParams);


const handleSelect = (category:string, value:string) =>{

  setFilters((prevFilters)=>{
    const updatedFilters ={...prevFilters}

    if(!updatedFilters[category]){
      updatedFilters[category] = []
    }

    if(updatedFilters[category].includes(value)){
      updatedFilters[category]=updatedFilters[category].filter((item)=>item !==value)
    }else{
      updatedFilters[category] = [...updatedFilters[category], value]
    }

 
    return updatedFilters

  })

}


  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((section) => (

          <div key={section.title}>
           <h1 className="text-xl py-3 font-bold">{section.title1 }</h1>
          {
            section.items &&(
              <div  className="">
                 {
                  section.items.map((item, itemIndex) =>(
                    <div className="flex align-middle gap-3 cursor-pointer"  key={itemIndex}>

                     
                      <input type="checkbox"
                      name="item"
                      id={item.title}
                      value={item.title }
                      checked={filters[section.title]?.includes(item.title) || false}
                      onChange={()=>handleSelect(section.title, item.title)}
                      
                      
                      />
                      <label htmlFor={item.title} className="text-[18px] cursor-pointer" >{item.title}</label>

                    </div>


                 
                   
                    )
                   )
                }
               </div>
              
            )
          }
          </div>


        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
