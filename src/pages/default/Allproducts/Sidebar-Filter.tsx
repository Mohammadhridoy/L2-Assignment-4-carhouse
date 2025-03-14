"use client"


import { useForm } from "react-hook-form"


import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"



export function CheckboxReactHookFormSingle({element}) {
  const form = useForm()


  return (
    <Form {...form}>
      <form  className="space-y-6">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem  className="flex justify-start align-middle ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              
                <FormLabel>
                  {
                    element
                  }
                </FormLabel>
              
            </FormItem>
          )}
        />
        
      </form>
    </Form>
  )
}
