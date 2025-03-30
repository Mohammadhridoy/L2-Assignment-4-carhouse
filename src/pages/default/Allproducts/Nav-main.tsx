

import {
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar"
import useFetchData from "@/Utils/fetchData"
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form"
import {  useState } from "react"
import { Titem } from "@/Utils/types"



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
  interface IFormInput {
    search: string
  }

  const [params, setParams] = useState<Titem[]>([])
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const param = {
      name:"searchTerm",
      value:data?.search
    }
    setParams([param])


  }



  const [filters, setFilters ] = useState<Record<string, string[]>>({})

  const queryParams = Object.entries(filters).map(([key, values])=>
      values.map((value)=>({name:key, value}))
  ).flat()

 
// fetch function 
{
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions, react-hooks/rules-of-hooks
  queryParams.length!== 0 ? useFetchData(queryParams) :  useFetchData(params)
}
   
  





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
         <form className=" lg:w-full"  onChange={handleSubmit(onSubmit)}>
          <Input type="text"  {...register("search")}  placeholder="search brand, car name, or category" /> 
          </form>

        {items.map((section) => (

          <div className="md:pl-10" key={section.title}>
           <h1 className="text-xl py-2 font-bold">{section.title1 }</h1>
          {
            section.items &&(
              <div  className="">
                 {
                  section.items.map((item, itemIndex) =>(
                    <div className="flex align-middle gap-2 cursor-pointer"  key={itemIndex}>

                     
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
