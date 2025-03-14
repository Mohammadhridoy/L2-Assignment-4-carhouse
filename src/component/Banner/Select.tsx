

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="md:w-[220px] lg:w-[290px]">
        <SelectValue placeholder="Select a car" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cars</SelectLabel>
          <SelectItem value="apple">SUV</SelectItem>
          <SelectItem value="banana">Sedan</SelectItem>
          <SelectItem value="blueberry">Luxury</SelectItem>
          <SelectItem value="grapes">MUV</SelectItem>
          <SelectItem value="pineapple">Toyota</SelectItem>
          <SelectItem value="Ford">Ford</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


export default SelectDemo