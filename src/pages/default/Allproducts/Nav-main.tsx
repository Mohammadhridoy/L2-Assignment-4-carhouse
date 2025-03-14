

import {
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar"







export function NavMain({
  items,
}: {
  items: {
    title: string
    items?: {
      title: string
    }[]
  }[]
}) {



const handleSelect = (event:React.ChangeEvent<HTMLInputElement>) =>{
  const {value, checked } = event.target

  console.log(value, checked);

}


  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((section) => (

          <div key={section.title}>
           <h1 className="text-xl py-3 font-bold">{section.title}</h1>
          {
            section.items &&(
              <div className="">
                 {
                  section.items.map((item, itemIndex) =>(
                    <div className="flex align-middle gap-3 cursor-pointer"  key={itemIndex}>

                     
                      <input type="checkbox"
                      name="item"
                      id={item.title}
                      value={item.title}
                      onChange={handleSelect}
                      
                      
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
