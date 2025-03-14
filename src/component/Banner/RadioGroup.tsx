import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"




export function RadioGroupDemo() {

    const [color, setColor] = useState(false)
   
  return (
    <RadioGroup defaultValue="comfortable" className="flex justify-start align-middle gap-28 cursor-pointer">
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem onClick={()=> setColor(false)} value="comfortable" id="r1" />
        <Label htmlFor="r1"  className={`"font-bold cursor-pointer ${color==true?"text-black": "text-red-500"} `}>By Budget</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem onClick={()=> setColor(true)} value="default" id="r2"className="" />
        <Label htmlFor="r2" className={`font-bold cursor-pointer ${color? "text-red-500" : "text-black"}` }>By Brand</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroup