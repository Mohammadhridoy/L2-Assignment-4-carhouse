import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  export function SelectDemo2() {
    return (
      <Select>
        <SelectTrigger className="md:w-[220px] lg:w-[290px]">
          <SelectValue placeholder="Price of Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
           <SelectLabel>Price of Cars</SelectLabel>
           <SelectItem value="1-5">1-5 Lakh</SelectItem>
            <SelectItem value="5-10">5-10 Lakh</SelectItem>
            <SelectItem value="10-15">10-15 Lakh</SelectItem>
            <SelectItem value="15-20">15-20 Lakh</SelectItem>
            <SelectItem value="25-30">25-30 Lakh</SelectItem>
            <SelectItem value="35-40">35-40 Lakh</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  
  
  export default SelectDemo2