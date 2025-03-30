import { baseApi } from "@/redux/Api/baseApi";
import { Titem } from "@/Utils/types";

;




const getAllCarsapi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllCars: builder.query({
            query: (args) =>{
                const params = new URLSearchParams()
                if(args){
                    
                   
                    args?.arg?.forEach((item:Titem)=>
                       {
                        params.append( item?.name as string, item?.value as string )
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
        getSingleData: builder.query({
            query: (args) =>({
                url: `/cars/${args}`,
                method:'GET',
            })
        }),



     })
})



export const {useGetAllCarsQuery, useGetSingleDataQuery}= getAllCarsapi