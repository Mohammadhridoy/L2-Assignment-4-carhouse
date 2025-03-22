import { baseApi } from "@/redux/Api/baseApi";

;




const getAllCarsapi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllCars: builder.query({
            query: (args) =>{
                const params = new URLSearchParams()
                if(args){
                    
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    args?.arg?.forEach((item:any)=>
                       {
                        params.append( item?.name, item?.value)
                       }
                    )
                    
                }
              
                return {
                    url: '/cars',
                    method:'GET',
                    params: params,
                }
             
         }

        }),
     })
})



export const {useGetAllCarsQuery}= getAllCarsapi