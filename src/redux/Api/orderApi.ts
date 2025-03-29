import { baseApi } from "./baseApi";




const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        setOrder: builder.mutation({
            query: (orderInfo) =>({
                url:"/orders",
                method:'POST',
                body: orderInfo
            })
        }),

        verifyOrder: builder.query({
            query:(order_id) =>({
                url:"/orders/verify",
                method:'GET',
                params:{ order_id}
            })
        })

  
    }),
    

})


export const {useSetOrderMutation, useVerifyOrderQuery} = userApi